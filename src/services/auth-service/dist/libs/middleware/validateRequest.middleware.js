"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const zod_1 = require("zod");
const responseFormat_1 = require("../../src/services/auth-service/src/utils/responseFormat");
const validateRequest = (schema) => {
    return {
        before: async (request) => {
            try {
                const body = request.event.body ? JSON.parse(request.event.body) : {};
                request.event.body = JSON.stringify(schema.parse(body));
                return;
            }
            catch (err) {
                if (err instanceof zod_1.ZodError) {
                    return (0, responseFormat_1.formatResponse)(400, {
                        message: "Validation error",
                        errors: err.issues,
                    });
                }
                throw err;
            }
        },
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.middleware.js.map