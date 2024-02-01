import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email().max(100),
  username: z.string().max(50),
  password: z.string(),
  first_name: z.string().max(50),
  last_name: z.string().max(50),
});

export const returnUserSchema = userSchema.extend({
  id: z.string(),
});

export const returnuserSchemPasswordOmit = returnUserSchema.omit({
  password: true,
});

export const returnAllUsersSchema = returnuserSchemPasswordOmit.array();

export const patchUserSchema = userSchema.partial();
