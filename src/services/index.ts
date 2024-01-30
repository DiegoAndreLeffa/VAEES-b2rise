import { deleteProductsService } from "./products/deleteProducts.services";
import { listAllProductsService } from "./products/getAllproducts.services";
import { getByCategoryProductsService } from "./products/getByCategory.services";
import { getByIdProductsService } from "./products/getByIdProducts.services";
import { patchProductsService } from "./products/patchProducts.services";
import { postProductsService } from "./products/postProducts.services";

export {
  postProductsService,
  patchProductsService,
  getByIdProductsService,
  getByCategoryProductsService,
  listAllProductsService,
  deleteProductsService,
};
