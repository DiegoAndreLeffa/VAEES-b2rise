import { z } from "zod";

import { DeepPartial } from "typeorm";
import {
  productsSchema,
  returnAllProductsSchema,
  returnProductsSchema,
} from "../../schemas";

export type tProducts = z.infer<typeof productsSchema>;

export type tReturnProducts = z.infer<typeof returnProductsSchema>;

export type tPatchProducts = DeepPartial<tProducts>;

export type tReturnProductsAll = z.infer<typeof returnAllProductsSchema>;
