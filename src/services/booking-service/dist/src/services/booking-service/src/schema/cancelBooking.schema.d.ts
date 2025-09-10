import { z } from 'zod';
export declare const cancelBookingSchema: z.ZodObject<{
    body: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type CancelBookingRequest = z.infer<typeof cancelBookingSchema>;
//# sourceMappingURL=cancelBooking.schema.d.ts.map