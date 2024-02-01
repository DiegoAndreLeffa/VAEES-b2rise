import {
  deleteProductsController,
  getAllProductsController,
  getByCategoryProductsController,
  getByIdProductsController,
  patchProductsController,
  postProductsController,
} from "./products/products.controller";
import {
  getPurchaseOrdersControllers,
  postPurchaseOrdersControllers,
} from "./purchaseOrders/purchaseOrders.services";
import {
  deleteUserController,
  getAllUserController,
  getByIdUserController,
  patchUserController,
  postUserController,
} from "./users/users.controllers";

export {
  postProductsController,
  getAllProductsController,
  getByIdProductsController,
  getByCategoryProductsController,
  patchProductsController,
  deleteProductsController,
  postUserController,
  getAllUserController,
  getByIdUserController,
  patchUserController,
  deleteUserController,
  postPurchaseOrdersControllers,
  getPurchaseOrdersControllers,
};
