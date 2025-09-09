"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = void 0;
const loginSchema_1 = require("../schema/loginSchema");
const loginUser_service_1 = require("../service/loginUser.service");
const responseFormat_1 = require("../utils/responseFormat");
const errors_1 = require("../utils/errors");
const validateRequest_middleware_1 = require("../../../../../libs/middleware/validateRequest.middleware");
const idempotencyMiddleware_1 = require("../../../../../libs/middleware/idempotencyMiddleware");
const core_1 = __importDefault(require("@middy/core"));
const baseHandler = async (event) => {
    try {
        const parsed = JSON.parse(event.body || '{}');
        const result = await (0, loginUser_service_1.loginUser)({
            email: parsed.email,
            password: parsed.password,
        });
        return (0, responseFormat_1.formatResponse)(200, {
            message: "Login successful",
            data: result,
        });
    }
    catch (error) {
        const { statusCode, message, details } = (0, errors_1.handleError)(error);
        return (0, responseFormat_1.formatResponse)(statusCode, { message, details });
    }
};
exports.loginHandler = (0, core_1.default)(baseHandler)
    .use((0, validateRequest_middleware_1.validateRequest)(loginSchema_1.loginSchema))
    .use((0, idempotencyMiddleware_1.idempotencyMiddleware)());
//# sourceMappingURL=loginHandler.js.map