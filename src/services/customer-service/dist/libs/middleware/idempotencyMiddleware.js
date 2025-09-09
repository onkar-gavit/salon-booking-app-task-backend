"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idempotencyMiddleware = void 0;
const idempotencyStore_1 = require("../../src/services/auth-service/src/utils/idempotencyStore");
const idempotencyMiddleware = () => {
    return {
        before: async (request) => {
            const headers = request.event.headers || {};
            const key = headers["Idempotency-Key"] || headers["idempotency-key"];
            if (!key) {
                throw new Error("Missing Idempotency-Key header");
            }
            const existing = await (0, idempotencyStore_1.getIdempotencyRecord)(key);
            if (existing) {
                request.response = existing;
                return;
            }
        },
        after: async (request) => {
            const headers = request.event.headers || {};
            const key = headers["Idempotency-Key"] || headers["idempotency-key"];
            if (key && request.response) {
                await (0, idempotencyStore_1.saveIdempotencyRecord)(key, request.response);
            }
        },
    };
};
exports.idempotencyMiddleware = idempotencyMiddleware;
//# sourceMappingURL=idempotencyMiddleware.js.map