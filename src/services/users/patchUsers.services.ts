import { Repository } from "typeorm";
import { tPatchUsers, tReturnUsers, tUsers } from "../../interfaces";
import { Users } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { returnUserSchema, returnuserSchemPasswordOmit } from "../../schemas";

export const patchUsersServices = async (
  userData: tUsers,
  userId: string
): Promise<tReturnUsers> => {
  const usersRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const oldData = await usersRepository.findOne({
    where: { id: userId },
  });

  if (!oldData) {
    throw new AppError("User not exists!", 404);
  }

  const user: tPatchUsers = usersRepository.create({
    ...oldData,
    ...userData,
  });

  await usersRepository.save(user);

  const newUser = returnuserSchemPasswordOmit.parse(user);

  return newUser;
};
