import { Request, Response } from "express";
import {
  deleteProductsService,
  getByCategoryProductsService,
  getByIdProductsService,
  listAllProductsService,
  patchProductsService,
  postProductsService,
} from "../../services";
import { ListAllProductsOptions } from "../../services/products/getAllproducts.services";

export const postProductsController = async (req: Request, res: Response) => {
  const newProduct = await postProductsService(req.body);

  return res.status(201).json(newProduct);
};

export const getAllProductsController = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const perPage = Number(req.query.perPage) || 5;
  const category = req.query.category as string | undefined;
  const priceFilter = req.query.priceFilter as "asc" | "desc" | undefined;
  const title = req.query.title as string | undefined;

  const options: ListAllProductsOptions = {
    page,
    pageSize: perPage,
    category,
    priceFilter,
    title,
  };

  const result = await listAllProductsService(options);
  return res.status(200).json(result);
};

export const getByIdProductsController = async (
  req: Request,
  res: Response
) => {
  const listById = await getByIdProductsService(String(req.params.id));

  return res.status(200).json(listById);
};

export const getByCategoryProductsController = async (
  req: Request,
  res: Response
) => {
  const listByCategory = await getByCategoryProductsService(
    String(req.params.category)
  );
  return res.status(200).json(listByCategory);
};

export const patchProductsController = async (req: Request, res: Response) => {
  const dataProduct = req.body;
  const idProduct = String(req.params.id);

  const patchProduct = await patchProductsService(dataProduct, idProduct);

  return res.status(200).json(patchProduct);
};

export const deleteProductsController = async (req: Request, res: Response) => {
  await deleteProductsService(String(req.params.id));
  return res.status(204).send();
};
