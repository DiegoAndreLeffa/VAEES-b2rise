import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities";
import { tReturnUsers } from "../../interfaces";
import { returnUserSchema } from "../../schemas";
import { AppError } from "../../errors";

export const getByIdUsersServices = async (
  id: string
): Promise<tReturnUsers> => {
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const userId = await usersRepository.findOne({ where: { id: id } });

  if (!userId) {
    throw new AppError("User not exists!", 404);
  }

  const user = returnUserSchema.parse(userId);

  return user;
};
