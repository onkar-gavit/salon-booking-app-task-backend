"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandler = void 0;
const registerSchema_1 = require("../schema/registerSchema");
const registerUser_service_1 = require("../service/registerUser.service");
const responseFormat_1 = require("../utils/responseFormat");
const errors_1 = require("../utils/errors");
const authMiddleware_1 = require("../../../../../libs/middleware/authMiddleware");
const idempotencyMiddleware_1 = require("../../../../../libs/middleware/idempotencyMiddleware");
const validateRequest_middleware_1 = require("../../../../../libs/middleware/validateRequest.middleware");
const core_1 = __importDefault(require("@middy/core"));
const baseHandler = async (event) => {
    try {
        const { uid } = event.user;
        const parsed = event.body;
        const user = await (0, registerUser_service_1.registerUser)({
            ...parsed,
            uid,
        });
        return (0, responseFormat_1.formatResponse)(201, {
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        const { statusCode, message, details } = (0, errors_1.handleError)(error);
        return (0, responseFormat_1.formatResponse)(statusCode, { message, details });
    }
};
exports.registerHandler = (0, core_1.default)(baseHandler)
    .use((0, authMiddleware_1.authMiddleware)())
    .use((0, validateRequest_middleware_1.validateRequest)(registerSchema_1.registerSchema))
    .use((0, idempotencyMiddleware_1.idempotencyMiddleware)());
//# sourceMappingURL=registerUserHandler.js.map