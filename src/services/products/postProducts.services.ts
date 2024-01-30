import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Products } from "../../entities";
import { tProducts, tReturnProducts } from "../../interfaces";
import { returnProductsSchema } from "../../schemas";

export const postProductsService = async (
  productData: tProducts
): Promise<tReturnProducts> => {
  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  const products = productsRepository.create({
    ...productData,
  });
  await productsRepository.save(products);

  const newProduct = returnProductsSchema.parse(products);

  return newProduct;
};
