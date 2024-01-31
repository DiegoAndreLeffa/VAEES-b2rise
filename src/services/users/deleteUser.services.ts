import { Repository } from "typeorm";
import { tPatchUsers, tReturnUsers, tUsers } from "../../interfaces";
import { Users } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { returnUserSchema } from "../../schemas";

export const deleteUsersServices = async (id: string) => {
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const userId = await usersRepository.findOne({
    where: { id: id },
  });

  if (!userId) {
    throw new AppError("User not exists!", 404);
  }

  await usersRepository.delete({ id: userId.id });
};
