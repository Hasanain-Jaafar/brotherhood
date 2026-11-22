import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().max(100).optional(),
});

export type ProfileInput = z.infer<typeof profileSchema>;
