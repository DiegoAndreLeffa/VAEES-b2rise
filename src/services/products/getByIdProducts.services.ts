import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Products } from "../../entities";

export const getByIdProductsService = async (id: string) => {
  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  const productId = await productsRepository.findOne({
    where: { id: id },
  });

  if (!productId) {
    throw new AppError("Product not exists!", 404);
  }

  return productId;
};
