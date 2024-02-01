import { Router } from "express";
import { validatedData } from "../../middlewares/validated.middlewares";
import { patchUserSchema, userSchema } from "../../schemas";
import {
  deleteUserController,
  getAllUserController,
  getByIdUserController,
  patchUserController,
  postUserController,
} from "../../controller";

export const userRouter: Router = Router();

userRouter.post("/", validatedData(userSchema), postUserController);
userRouter.get("/", getAllUserController);
userRouter.get("/:id", getByIdUserController);
userRouter.patch("/:id", validatedData(patchUserSchema), patchUserController);
userRouter.delete("/:id", deleteUserController);
