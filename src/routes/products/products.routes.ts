import { Router } from "express";
import {
  deleteProductsController,
  getAllProductsController,
  getByCategoryProductsController,
  getByIdProductsController,
  patchProductsController,
  postProductsController,
} from "../../controller";
import { validatedData } from "../../middlewares/validated.middlewares";
import { patchProductSchema, productsSchema } from "../../schemas";

export const productsRouter: Router = Router();

productsRouter.post("/", validatedData(productsSchema), postProductsController);
productsRouter.get("/", getAllProductsController);
productsRouter.get("/:id", getByIdProductsController);
productsRouter.get("/category/:category", getByCategoryProductsController);
productsRouter.patch(
  "/:id",
  validatedData(patchProductSchema),
  patchProductsController
);
productsRouter.delete("/:id", deleteProductsController);
