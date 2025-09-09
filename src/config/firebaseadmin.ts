import * as admin from 'firebase-admin';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import { logger } from '../../libs/common-utils/src/logger';

const SECRET_NAME = process.env.FIREBASE_SECRET_NAME;
const REGION = process.env.CUSTOM_AWS_REGION;

if (!SECRET_NAME || !REGION) {
  throw new Error(
    'Missing required environment variables: FIREBASE_SECRET_NAME or CUSTOM_AWS_REGION',
  );
}

const ssmClient = new SSMClient({ region: REGION });

export const initializeFirebaseAdmin = async (): Promise<void> => {
  if (admin.apps.length > 0) return;

  try {
    const response = await ssmClient.send(
      new GetParameterCommand({
        Name: SECRET_NAME,
        WithDecryption: true,
      }),
    );

    if (!response.Parameter?.Value) {
      throw new Error('Firebase credentials not found in SSM parameter store');
    }

    const serviceAccount = JSON.parse(response.Parameter?.Value);
    
    logger.info('FirebaseAdmin Credential fetched successfully from SSM');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    logger.info('FirebaseAdmin initialized');
  } catch (error: unknown) {
    const firebaseError = error as Record<string, unknown>;

    logger.error('FirebaseAdmin Initialization failed', {
      code: firebaseError?.code,
      message: firebaseError?.message,
      stack: firebaseError?.stack,
    });

    throw new Error('Firebase Admin initialization failed: ' + (firebaseError?.message ?? 'Unknown error'));
  }
};

export const verifyFirebaseToken = async (idToken: string): Promise<admin.auth.DecodedIdToken> => {
  // Ensure Firebase Admin is initialized
  await initializeFirebaseAdmin();
  
  // Get the default app (should be initialized by now)
  const app = admin.app();
  
  return admin.auth(app).verifyIdToken(idToken);
};

export const signInWithPassword = async (email: string, password: string) => {
  try {
    // Get Firebase Web API Key from SSM
    const webApiKeyResponse = await ssmClient.send(
      new GetParameterCommand({
        Name: process.env.FIREBASE_WEB_API_KEY || '/firebase/web-api-key',
        WithDecryption: true,
      }),
    );

    if (!webApiKeyResponse.Parameter?.Value) {
      throw new Error('Firebase Web API Key not found in SSM parameter store');
    }

    const webApiKey = webApiKeyResponse.Parameter.Value;

    // Use Firebase Auth REST API to sign in
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json() as {
      localId: string;
      email: string;
      idToken: string;
      refreshToken: string;
      expiresIn: string;
      error?: { message: string };
    };

    if (!response.ok) {
      throw new Error(data.error?.message || 'Authentication failed');
    }

    return {
      localId: data.localId,
      email: data.email,
      idToken: data.idToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
    };
  } catch (error: any) {
    logger.error('Firebase sign in failed', {
      error: error.message,
      email,
    });
    throw error;
  }
};

export const createCustomToken = async (uid: string, additionalClaims?: object): Promise<string> => {
  // Ensure Firebase Admin is initialized
  await initializeFirebaseAdmin();
  
  // Get the default app (should be initialized by now)
  const app = admin.app();
  
  return admin.auth(app).createCustomToken(uid, additionalClaims);
};

export { admin };