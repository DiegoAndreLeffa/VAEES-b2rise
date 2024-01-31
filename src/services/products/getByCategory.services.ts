import { ILike, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Products } from "../../entities";

export const getByCategoryProductsService = async (category: string) => {
  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  const products = await productsRepository.find({
    where: {
      category: ILike(`%${category}%`),
    },
  });

  if (!products) {
    throw new AppError("Product not exists!", 404);
  }

  return products;
};
