"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const prismaclient_1 = require("../../../../../libs/common-utils/prismaclient/prismaclient");
const errors_1 = require("../utils/errors");
const registerUser = async (data) => {
    try {
        const existingUser = await prismaclient_1.prisma.user.findFirst({
            where: {
                OR: [{ firebaseUid: data.uid }, { email: data.email }],
            },
        });
        if (existingUser) {
            throw new errors_1.ConflictError("User already exists");
        }
        const user = await prismaclient_1.prisma.user.create({
            data: {
                firebaseUid: data.uid,
                email: data.email,
                name: data.name,
            },
        });
        return user;
    }
    catch (error) {
        throw new errors_1.DatabaseError("Failed to register user");
    }
};
exports.registerUser = registerUser;
//# sourceMappingURL=registerUser.service.js.map