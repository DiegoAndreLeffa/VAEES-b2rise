import { Repository } from "typeorm";
import { tPurchaseOrders, tReturnPurchaseOrders } from "../../interfaces";
import {
  Products,
  PurchaseOrder,
  PurchaseOrderItem,
  Users,
} from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const postPurchaseOrderServices = async (orderData: tPurchaseOrders) => {
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);
  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);
  const orderRepository: Repository<PurchaseOrder> =
    AppDataSource.getRepository(PurchaseOrder);
  const orderItemRepository: Repository<PurchaseOrderItem> =
    AppDataSource.getRepository(PurchaseOrderItem);

  const user = await userRepository.findOne({
    where: { username: orderData.nameUser },
  });

  const products = await productsRepository.findOne({
    where: { title: orderData.nameProduct },
  });

  if (!user) {
    throw new AppError("User not exists!", 404);
  }

  if (!products) {
    throw new AppError("Product not exists!", 404);
  }

  const order = orderRepository.create({
    user_id: user,
    date: new Date(),
  });

  await orderRepository.save(order);

  const orderItem = orderItemRepository.create({
    product: products,
    purchaseOrder: order,
    quantity: orderData.quantity,
    price: Number(products.price) * orderData.quantity,
  });

  await orderItemRepository.save(orderItem);

  const orderReturn = await orderItemRepository
    .createQueryBuilder("orderItem")
    .where("orderItem.id = :id", { id: orderItem.id })
    .leftJoinAndSelect("orderItem.purchaseOrder", "purchaseOrder")
    .leftJoinAndSelect("orderItem.product", "product")
    .getOneOrFail();

  return orderReturn;
};
