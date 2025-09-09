"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const firebaseadmin_1 = require("../../src/config/firebaseadmin");
const errors_1 = require("../../src/services/auth-service/src/utils/errors");
const authMiddleware = () => {
    const before = async (request) => {
        const { event } = request;
        const authHeader = event.headers?.Authorization || event.headers?.authorization;
        if (!authHeader) {
            throw new errors_1.UnauthorizedError("Missing Authorization header");
        }
        if (!authHeader.startsWith("Bearer ")) {
            throw new errors_1.UnauthorizedError("Invalid Authorization header format");
        }
        const idToken = authHeader.substring(7);
        try {
            const decodedToken = await (0, firebaseadmin_1.verifyFirebaseToken)(idToken);
            event.user = {
                uid: decodedToken.uid,
                email: decodedToken.email ?? "",
                name: decodedToken.name,
            };
        }
        catch (error) {
            console.error("Token verification failed:", error);
            throw new errors_1.UnauthorizedError("Invalid or expired token");
        }
    };
    return { before };
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map