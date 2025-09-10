import { z } from 'zod';

export const createBookingSchema = z.object({
  body: z.object({
    serviceId: z.string().uuid('Service ID must be a valid UUID'),
    customerId: z.string().uuid('Customer ID must be a valid UUID'),
    locationId: z.string().min(1, 'Location ID is required'),
    startTime: z.string().datetime('Start time must be a valid ISO 8601 datetime'),
    notes: z.string().optional()
  })
});

export type CreateBookingRequest = z.infer<typeof createBookingSchema>;
