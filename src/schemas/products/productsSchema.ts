import { z } from "zod";

export const productsSchema = z.object({
  title: z.string().max(30),
  price: z.number(),
  description: z.string().max(100),
  category: z.string().max(50),
  image: z.string().max(200),
});

export const returnProductsSchema = productsSchema.extend({
  id: z.string(),
});

export const returnAllProductsSchema = z.object({
  product: z.array(productsSchema),
  pageInfo: z.object({
    page: z.number(),
    pageSize: z.number(),
    totalCount: z.number(),
    totalPages: z.number(),
  }),
});
