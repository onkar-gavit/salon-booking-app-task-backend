"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const prismaclient_1 = require("../../../../../libs/common-utils/prismaclient/prismaclient");
const errors_1 = require("../utils/errors");
const firebaseadmin_1 = require("../../../../config/firebaseadmin");
const loginUser = async (data) => {
    var _a, _b, _c, _d, _e, _f;
    try {
        const authData = await (0, firebaseadmin_1.signInWithPassword)(data.email, data.password);
        const firebaseUid = authData.localId;
        const dbUser = await prismaclient_1.prisma.user.findUnique({
            where: {
                firebaseUid: firebaseUid,
            },
            select: {
                id: true,
                firebaseUid: true,
                email: true,
                name: true,
                createdAt: true,
            },
        });
        if (!dbUser) {
            throw new errors_1.NotFoundError("User not found in database");
        }
        const customToken = await (0, firebaseadmin_1.createCustomToken)(firebaseUid, {
            userId: dbUser.id,
            email: dbUser.email,
            name: dbUser.name,
        });
        return {
            user: {
                id: dbUser.id,
                firebaseUid: dbUser.firebaseUid,
                email: dbUser.email,
                name: dbUser.name,
                createdAt: dbUser.createdAt,
            },
            token: customToken,
            firebaseToken: authData.idToken,
            expiresIn: authData.expiresIn,
            tokenType: "Bearer",
        };
    }
    catch (error) {
        if (((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('INVALID_PASSWORD')) || ((_b = error.message) === null || _b === void 0 ? void 0 : _b.includes('EMAIL_NOT_FOUND'))) {
            throw new errors_1.UnauthorizedError("Invalid email or password");
        }
        if ((_c = error.message) === null || _c === void 0 ? void 0 : _c.includes('INVALID_EMAIL')) {
            throw new errors_1.UnauthorizedError("Invalid email format");
        }
        if ((_d = error.message) === null || _d === void 0 ? void 0 : _d.includes('USER_DISABLED')) {
            throw new errors_1.UnauthorizedError("User account has been disabled");
        }
        if ((_e = error.message) === null || _e === void 0 ? void 0 : _e.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
            throw new errors_1.UnauthorizedError("Too many failed login attempts. Please try again later");
        }
        if ((_f = error.message) === null || _f === void 0 ? void 0 : _f.includes('INVALID_LOGIN_CREDENTIALS')) {
            throw new errors_1.UnauthorizedError("Invalid email or password");
        }
        if (error instanceof errors_1.UnauthorizedError || error instanceof errors_1.NotFoundError) {
            throw error;
        }
        throw new errors_1.DatabaseError("Login failed: " + error.message);
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.service.js.map