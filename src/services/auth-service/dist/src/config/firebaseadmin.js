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
exports.admin = exports.verifyFirebaseToken = exports.initializeFirebaseAdmin = void 0;
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
    var _a, _b, _c;
    if (admin.apps.length > 0)
        return;
    try {
        const response = await ssmClient.send(new client_ssm_1.GetParameterCommand({
            Name: SECRET_NAME,
            WithDecryption: true,
        }));
        if (!((_a = response.Parameter) === null || _a === void 0 ? void 0 : _a.Value)) {
            throw new Error('Firebase credentials not found in SSM parameter store');
        }
        const serviceAccount = JSON.parse((_b = response.Parameter) === null || _b === void 0 ? void 0 : _b.Value);
        logger_1.logger.info('FirebaseAdmin Credential fetched successfully from SSM');
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        logger_1.logger.info('FirebaseAdmin initialized');
    }
    catch (error) {
        const firebaseError = error;
        logger_1.logger.error('FirebaseAdmin Initialization failed', {
            code: firebaseError === null || firebaseError === void 0 ? void 0 : firebaseError.code,
            message: firebaseError === null || firebaseError === void 0 ? void 0 : firebaseError.message,
            stack: firebaseError === null || firebaseError === void 0 ? void 0 : firebaseError.stack,
        });
        throw new Error('Firebase Admin initialization failed: ' + ((_c = firebaseError === null || firebaseError === void 0 ? void 0 : firebaseError.message) !== null && _c !== void 0 ? _c : 'Unknown error'));
    }
};
exports.initializeFirebaseAdmin = initializeFirebaseAdmin;
const verifyFirebaseToken = async (idToken) => {
    await (0, exports.initializeFirebaseAdmin)();
    const app = admin.app();
    return admin.auth(app).verifyIdToken(idToken);
};
exports.verifyFirebaseToken = verifyFirebaseToken;
//# sourceMappingURL=firebaseadmin.js.map