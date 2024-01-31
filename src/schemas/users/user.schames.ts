import { z } from "zod";

export const userSchema = z.object({
  email: z.string().max(100),
  username: z.string().max(50),
  password: z.string().max(50),
  first_name: z.string().max(50),
  last_name: z.string().max(50),
});

export const returnUserSchema = userSchema.extend({
  id: z.string(),
});

export const returnAllUsersSchema = returnUserSchema.array();

export const patchUserSchema = userSchema.partial();
