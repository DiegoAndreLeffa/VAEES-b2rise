import { Router } from "express";
import { validatedData } from "../../middlewares/validated.middlewares";
import { purchaseOrderSchema } from "../../schemas";
import {
  getPurchaseOrdersControllers,
  postPurchaseOrdersControllers,
} from "../../controller";

export const orderRoutes: Router = Router();

orderRoutes.post(
  "/",
  validatedData(purchaseOrderSchema),
  postPurchaseOrdersControllers
);

orderRoutes.get("/", getPurchaseOrdersControllers);
