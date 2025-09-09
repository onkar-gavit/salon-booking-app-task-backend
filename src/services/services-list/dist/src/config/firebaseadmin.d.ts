import * as admin from 'firebase-admin';
export declare const initializeFirebaseAdmin: () => Promise<void>;
export declare const verifyFirebaseToken: (idToken: string) => Promise<admin.auth.DecodedIdToken>;
export declare const signInWithPassword: (email: string, password: string) => Promise<{
    localId: string;
    email: string;
    idToken: string;
    refreshToken: string;
    expiresIn: string;
}>;
export declare const createCustomToken: (uid: string, additionalClaims?: object) => Promise<string>;
export { admin };
//# sourceMappingURL=firebaseadmin.d.ts.map