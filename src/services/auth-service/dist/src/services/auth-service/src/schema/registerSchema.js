"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.email(),
    name: zod_1.z.string().min(2),
});
//# sourceMappingURL=registerSchema.js.map