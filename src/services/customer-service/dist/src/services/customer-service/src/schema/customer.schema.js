"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
exports.createCustomerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
    phone: zod_1.z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits')
        .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),
    email: zod_1.z.string().email('Invalid email format').optional(),
});
//# sourceMappingURL=customer.schema.js.map