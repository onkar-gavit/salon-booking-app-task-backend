import { z } from 'zod';
export declare const createWalkinSchema: z.ZodObject<{
    locationId: z.ZodString;
    customerId: z.ZodString;
    serviceId: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CreateWalkinInput = z.infer<typeof createWalkinSchema>;
//# sourceMappingURL=walkin.schema.d.ts.map