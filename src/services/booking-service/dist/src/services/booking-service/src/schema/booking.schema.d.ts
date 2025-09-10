import { z } from 'zod';
export declare const createBookingSchema: z.ZodObject<{
    body: z.ZodObject<{
        serviceId: z.ZodString;
        customerId: z.ZodString;
        locationId: z.ZodString;
        startTime: z.ZodString;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateBookingRequest = z.infer<typeof createBookingSchema>;
//# sourceMappingURL=booking.schema.d.ts.map