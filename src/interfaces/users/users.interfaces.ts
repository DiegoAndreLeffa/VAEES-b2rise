import { z } from "zod";
import {
  patchUserSchema,
  returnAllUsersSchema,
  returnUserSchema,
  userSchema,
} from "../../schemas";

export type tUsers = z.infer<typeof userSchema>;

export type tReturnUsers = z.infer<typeof returnUserSchema>;

export type tPatchUsers = z.infer<typeof patchUserSchema>;

export type tReturnAllUsers = z.infer<typeof returnAllUsersSchema>;
