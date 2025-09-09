"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const customer_schema_1 = require("../schema/customer.schema");
const customerService_1 = require("../service/customerService");
const responseFormat_1 = require("../utils/responseFormat");
const errors_1 = require("../utils/errors");
const authMiddleware_1 = require("../../../../../libs/middleware/authMiddleware");
const validateRequest_middleware_1 = require("../../../../../libs/middleware/validateRequest.middleware");
const idempotencyMiddleware_1 = require("../../../../../libs/middleware/idempotencyMiddleware");
const core_1 = __importDefault(require("@middy/core"));
const customerService = new customerService_1.CustomerService();
const baseHandler = async (event) => {
    try {
        const { uid } = event.user;
        const parsed = JSON.parse(event.body || '{}');
        const customer = await customerService.upsertCustomer(uid, parsed);
        return (0, responseFormat_1.formatResponse)(200, {
            message: "Customer upserted successfully",
            data: customer,
        });
    }
    catch (error) {
        const { statusCode, message, details } = (0, errors_1.handleError)(error);
        return (0, responseFormat_1.formatResponse)(statusCode, { message, details });
    }
};
exports.handler = (0, core_1.default)(baseHandler)
    .use((0, authMiddleware_1.authMiddleware)())
    .use((0, validateRequest_middleware_1.validateRequest)(customer_schema_1.createCustomerSchema))
    .use((0, idempotencyMiddleware_1.idempotencyMiddleware)());
//# sourceMappingURL=upsertCustomerHandler.js.map