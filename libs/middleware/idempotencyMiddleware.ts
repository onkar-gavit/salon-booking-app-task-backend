import { MiddlewareObj } from "@middy/core";
import {
  getIdempotencyRecord,
  saveIdempotencyRecord,
} from "../../src/services/auth-service/src/utils/idempotencyStore";
// import { formatJSONResponse } from '../utils/responseFormat';

export const idempotencyMiddleware = (): MiddlewareObj => {
  return {
    before: async (request) => {
      // Normalize header casing
      const headers =
        (request.event as { headers?: Record<string, string> }).headers || {};
      const key = headers["Idempotency-Key"] || headers["idempotency-key"];

      if (!key) {
        throw new Error("Missing Idempotency-Key header");
      }

      const existing = await getIdempotencyRecord(key);

      if (existing) {
        // Short-circuit: reuse stored response
        request.response = existing;
        return; // 🔑 ensure handler doesn’t run again
      }
    },

    after: async (request) => {
      const headers =
        (request.event as { headers?: Record<string, string> }).headers || {};
      const key = headers["Idempotency-Key"] || headers["idempotency-key"];

      if (key && request.response) {
        // Save the complete Lambda response for reuse
        await saveIdempotencyRecord(key, request.response);
      }
    },
  };
};
