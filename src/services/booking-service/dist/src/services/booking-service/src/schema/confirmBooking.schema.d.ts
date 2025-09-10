import { z } from 'zod';
export declare const confirmBookingSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type ConfirmBookingRequest = z.infer<typeof confirmBookingSchema>;
//# sourceMappingURL=confirmBooking.schema.d.ts.map