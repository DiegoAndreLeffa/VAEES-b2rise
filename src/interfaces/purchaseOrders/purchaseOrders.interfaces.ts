import { z } from "zod";
import { purchaseOrderSchema, returnPurchaseOrderSchema } from "../../schemas";

export type tPurchaseOrders = z.infer<typeof purchaseOrderSchema>;

export type tReturnPurchaseOrders = z.infer<typeof returnPurchaseOrderSchema>;
