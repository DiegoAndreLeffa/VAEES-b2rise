import { Request, Response } from "express";
import {
  postPurchaseOrderServices,
  getHystoryPurchaseOrders,
} from "../../services";
import { FilterOptions } from "../../services/purchaseOrders/getPurchaseOrders.services";

export const postPurchaseOrdersControllers = async (
  req: Request,
  res: Response
) => {
  const newOrder = await postPurchaseOrderServices(req.body);

  return res.status(201).json(newOrder);
};

export const getPurchaseOrdersControllers = async (
  req: Request,
  res: Response
) => {
  const filters: FilterOptions = {
    startDate: req.query.startDate
      ? new Date(req.query.startDate.toString())
      : undefined!,
    endDate: req.query.endDate
      ? new Date(req.query.endDate.toString())
      : undefined!,
    minPrice:
      req.query.minPrice !== undefined
        ? parseFloat(req.query.minPrice.toString())
        : undefined!,
    maxPrice:
      req.query.maxPrice !== undefined
        ? parseFloat(req.query.maxPrice.toString())
        : undefined!,
    minQuantity:
      req.query.minQuantity !== undefined
        ? parseInt(req.query.minQuantity.toString())
        : undefined!,
    maxQuantity:
      req.query.maxQuantity !== undefined
        ? parseInt(req.query.maxQuantity.toString())
        : undefined!,
  };

  const history = await getHystoryPurchaseOrders(filters);

  return res.status(200).json(history);
};
