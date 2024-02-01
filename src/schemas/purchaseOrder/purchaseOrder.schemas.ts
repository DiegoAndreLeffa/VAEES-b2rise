import { z } from "zod";

export const purchaseOrderSchema = z.object({
  nameUser: z.string(),
  nameProduct: z.string(),
  quantity: z.number(),
});

export const returnPurchaseOrderSchema = purchaseOrderSchema.extend({
  id: z.string(),
});
