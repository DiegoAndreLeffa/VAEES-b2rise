import { Repository, Between, LessThan, MoreThan } from "typeorm";
import { PurchaseOrderItem } from "../../entities";
import { AppDataSource } from "../../data-source";

export interface FilterOptions {
  startDate?: Date;
  endDate?: Date;
  minPrice?: number;
  maxPrice?: number;
  minQuantity?: number;
  maxQuantity?: number;
}

export const getHystoryPurchaseOrders = async (filters?: FilterOptions) => {
  const orderItemRepository: Repository<PurchaseOrderItem> =
    AppDataSource.getRepository(PurchaseOrderItem);

  const query = orderItemRepository
    .createQueryBuilder("orderItem")
    .leftJoinAndSelect("orderItem.purchaseOrder", "purchaseOrder")
    .leftJoinAndSelect("orderItem.product", "product");

  if (filters) {
    if (filters.startDate && filters.endDate) {
      query.andWhere("purchaseOrder.date BETWEEN :startDate AND :endDate", {
        startDate: filters.startDate,
        endDate: filters.endDate,
      });
    }

    if (filters.minPrice !== undefined) {
      query.andWhere("orderItem.price >= :minPrice", {
        minPrice: filters.minPrice,
      });
    }

    if (filters.maxPrice !== undefined) {
      query.andWhere("orderItem.price <= :maxPrice", {
        maxPrice: filters.maxPrice,
      });
    }

    if (filters.minQuantity !== undefined) {
      query.andWhere("orderItem.quantity >= :minQuantity", {
        minQuantity: filters.minQuantity,
      });
    }

    if (filters.maxQuantity !== undefined) {
      query.andWhere("orderItem.quantity <= :maxQuantity", {
        maxQuantity: filters.maxQuantity,
      });
    }
  }

  const history = await query.getMany();

  return history;
};
