import { z } from 'zod';

export const cancelBookingSchema = z.object({
  body: z.object({}) // No body required for cancel action
});

export type CancelBookingRequest = z.infer<typeof cancelBookingSchema>;
