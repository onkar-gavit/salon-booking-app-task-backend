"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const firebaseadmin_1 = require("../../src/config/firebaseadmin");
const errors_1 = require("../../src/services/auth-service/src/utils/errors");
const authMiddleware = () => {
    const before = async (request) => {
        var _a, _b, _c;
        const { event } = request;
        const authHeader = ((_a = event.headers) === null || _a === void 0 ? void 0 : _a.Authorization) || ((_b = event.headers) === null || _b === void 0 ? void 0 : _b.authorization);
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
                email: (_c = decodedToken.email) !== null && _c !== void 0 ? _c : "",
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