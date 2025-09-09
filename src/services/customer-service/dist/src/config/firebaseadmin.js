"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = exports.createCustomToken = exports.signInWithPassword = exports.verifyFirebaseToken = exports.initializeFirebaseAdmin = void 0;
const admin = __importStar(require("firebase-admin"));
exports.admin = admin;
const client_ssm_1 = require("@aws-sdk/client-ssm");
const logger_1 = require("../../libs/common-utils/src/logger");
const SECRET_NAME = process.env.FIREBASE_SECRET_NAME;
const REGION = process.env.CUSTOM_AWS_REGION;
if (!SECRET_NAME || !REGION) {
    throw new Error('Missing required environment variables: FIREBASE_SECRET_NAME or CUSTOM_AWS_REGION');
}
const ssmClient = new client_ssm_1.SSMClient({ region: REGION });
const initializeFirebaseAdmin = async () => {
    if (admin.apps.length > 0)
        return;
    try {
        const response = await ssmClient.send(new client_ssm_1.GetParameterCommand({
            Name: SECRET_NAME,
            WithDecryption: true,
        }));
        if (!response.Parameter?.Value) {
            throw new Error('Firebase credentials not found in SSM parameter store');
        }
        const serviceAccount = JSON.parse(response.Parameter?.Value);
        logger_1.logger.info('FirebaseAdmin Credential fetched successfully from SSM');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        logger_1.logger.info('FirebaseAdmin initialized');
    }
    catch (error) {
        const firebaseError = error;
        logger_1.logger.error('FirebaseAdmin Initialization failed', {
            code: firebaseError?.code,
            message: firebaseError?.message,
            stack: firebaseError?.stack,
        });
        throw new Error('Firebase Admin initialization failed: ' + (firebaseError?.message ?? 'Unknown error'));
    }
};
exports.initializeFirebaseAdmin = initializeFirebaseAdmin;
const verifyFirebaseToken = async (idToken) => {
    await (0, exports.initializeFirebaseAdmin)();
    const app = admin.app();
    return admin.auth(app).verifyIdToken(idToken);
};
exports.verifyFirebaseToken = verifyFirebaseToken;
const signInWithPassword = async (email, password) => {
    try {
        const webApiKeyResponse = await ssmClient.send(new client_ssm_1.GetParameterCommand({
            Name: process.env.FIREBASE_WEB_API_KEY || '/firebase/web-api-key',
            WithDecryption: true,
        }));
        if (!webApiKeyResponse.Parameter?.Value) {
            throw new Error('Firebase Web API Key not found in SSM parameter store');
        }
        const webApiKey = webApiKeyResponse.Parameter.Value;
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });
        const data = await response.json();
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
    }
    catch (error) {
        logger_1.logger.error('Firebase sign in failed', {
            error: error.message,
            email,
        });
        throw error;
    }
};
exports.signInWithPassword = signInWithPassword;
const createCustomToken = async (uid, additionalClaims) => {
    await (0, exports.initializeFirebaseAdmin)();
    const app = admin.app();
    return admin.auth(app).createCustomToken(uid, additionalClaims);
};
exports.createCustomToken = createCustomToken;
//# sourceMappingURL=firebaseadmin.js.map