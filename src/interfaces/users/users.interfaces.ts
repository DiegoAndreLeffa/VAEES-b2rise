import { z } from "zod";
import {
  patchUserSchema,
  returnAllUsersSchema,
  returnUserSchema,
  returnuserSchemPasswordOmit,
  userSchema,
} from "../../schemas";
import { DeepPartial } from "typeorm";

export type tUsers = z.infer<typeof userSchema>;

export type tReturnUsers = z.infer<typeof returnuserSchemPasswordOmit>;

export type tPatchUsers = DeepPartial<tUsers>;

export type tReturnAllUsers = z.infer<typeof returnAllUsersSchema>;
