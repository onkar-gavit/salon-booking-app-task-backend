import { z } from 'zod';

export const confirmBookingSchema = z.object({
  body: z.object({}) // No body required for confirm action
});

export type ConfirmBookingRequest = z.infer<typeof confirmBookingSchema>;
