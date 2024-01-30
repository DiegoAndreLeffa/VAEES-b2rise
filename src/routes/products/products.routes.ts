import { Router } from "express";
import {
  deleteProductsController,
  getAllProductsController,
  getByCategoryProductsController,
  getByIdProductsController,
  patchProductsController,
  postProductsController,
} from "../../controller";

export const productsRouter: Router = Router();

productsRouter.post("/", postProductsController);
productsRouter.get("/", getAllProductsController);
productsRouter.get("/:id", getByIdProductsController);
productsRouter.get("/category/:category", getByCategoryProductsController);
productsRouter.patch("/:id", patchProductsController);
productsRouter.delete("/:id", deleteProductsController);
