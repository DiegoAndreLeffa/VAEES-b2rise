import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Products } from "../../entities";
import { tPatchProducts, tProducts, tReturnProducts } from "../../interfaces";
import { returnProductsSchema } from "../../schemas";
import { AppError } from "../../errors";

export const patchProductsService = async (
  productData: tProducts,
  productsId: string
): Promise<tReturnProducts> => {
  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  const oldData = await productsRepository.findOne({
    where: {
      id: productsId,
    },
  });

  if (!oldData) {
    throw new AppError("Product not exists!", 404);
  }

  const products: tPatchProducts = productsRepository.create({
    ...oldData,
    ...productData,
  });
  await productsRepository.save(products);

  const newProduct = returnProductsSchema.parse(products);

  return newProduct;
};
