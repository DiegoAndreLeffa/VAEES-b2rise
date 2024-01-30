import { Router } from "express";

export const productsRouter: Router = Router();

productsRouter.post("/products");
productsRouter.get("/products");
productsRouter.get("/products/:id");
productsRouter.get("/products/:category");
productsRouter.patch("/products/:id");
productsRouter.delete("/products/:id");
