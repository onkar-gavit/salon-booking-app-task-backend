import { z } from 'zod';

export const createWalkinSchema = z.object({
  locationId: z.string().uuid('Location ID must be a valid UUID'),
  customerId: z.string().uuid('Customer ID must be a valid UUID'),
  serviceId: z.string().uuid('Service ID must be a valid UUID'),
  notes: z.string().optional(),
});

export type CreateWalkinInput = z.infer<typeof createWalkinSchema>;
