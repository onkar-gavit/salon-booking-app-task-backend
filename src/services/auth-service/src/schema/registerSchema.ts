import { z } from 'zod';

export const registerSchema = z.object({
  email: z.email(),
  name: z.string().min(2),
});

export type RegisterInput = z.infer<typeof registerSchema>;
