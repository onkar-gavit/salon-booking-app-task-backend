"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idempotencyMiddleware = void 0;
const idempotencyStore_1 = require("../../src/services/auth-service/src/utils/idempotencyStore");
// import { formatJSONResponse } from '../utils/responseFormat';
const idempotencyMiddleware = () => {
    return {
        before: async (request) => {
            // Normalize header casing
            const headers = request.event.headers || {};
            const key = headers["Idempotency-Key"] || headers["idempotency-key"];
            if (!key) {
                throw new Error("Missing Idempotency-Key header");
            }
            const existing = await (0, idempotencyStore_1.getIdempotencyRecord)(key);
            if (existing) {
                // Short-circuit: reuse stored response
                request.response = existing;
                return; // 🔑 ensure handler doesn’t run again
            }
        },
        after: async (request) => {
            const headers = request.event.headers || {};
            const key = headers["Idempotency-Key"] || headers["idempotency-key"];
            if (key && request.response) {
                // Save the complete Lambda response for reuse
                await (0, idempotencyStore_1.saveIdempotencyRecord)(key, request.response);
            }
        },
    };
};
exports.idempotencyMiddleware = idempotencyMiddleware;
//# sourceMappingURL=idempotencyMiddleware.js.map