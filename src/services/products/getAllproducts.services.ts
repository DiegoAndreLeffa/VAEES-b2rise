import { Repository, Like, MoreThan, LessThan } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Products } from "../../entities";
import { returnAllProductsSchema } from "../../schemas";
import { tReturnProductsAll } from "../../interfaces";

export interface ListAllProductsOptions {
  page?: number | undefined;
  pageSize?: number | undefined;
  category?: string | undefined;
  priceFilter?: "asc" | "desc" | undefined;
  title?: string | undefined;
}

export const listAllProductsService = async (
  options: ListAllProductsOptions
): Promise<tReturnProductsAll> => {
  const { page = 1, pageSize = 10, category, priceFilter, title } = options;

  const productsRepository: Repository<Products> =
    AppDataSource.getRepository(Products);

  const normalizedCategory = category?.toLowerCase();

  const queryBuilder = productsRepository.createQueryBuilder("product");

  if (normalizedCategory) {
    queryBuilder.andWhere("LOWER(product.category) = :category", {
      category: normalizedCategory,
    });
  }

  if (title) {
    queryBuilder.andWhere("product.title LIKE :title", { title: `%${title}%` });
  }

  if (priceFilter) {
    const orderDirection = priceFilter === "asc" ? "ASC" : "DESC";
    queryBuilder.orderBy("product.price", orderDirection);
  }

  const skip = (page - 1) * pageSize;
  const [products, totalCount] = await queryBuilder
    .skip(skip)
    .take(pageSize)
    .getManyAndCount();

  const totalPages = Math.ceil(totalCount / pageSize);

  const result: tReturnProductsAll = {
    pageInfo: {
      page,
      pageSize,
      totalCount,
      totalPages,
    },
    product: products,
  };

  return result;
};
