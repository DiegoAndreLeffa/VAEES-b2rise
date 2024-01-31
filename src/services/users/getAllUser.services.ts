import { Repository } from "typeorm";
import { Users } from "../../entities";
import { tReturnAllUsers } from "../../interfaces";
import { AppDataSource } from "../../data-source";
import { returnAllUsersSchema } from "../../schemas";

export const getAllUsersServices = async (): Promise<tReturnAllUsers> => {
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const allUsers = await userRepository.find({});

  const user = returnAllUsersSchema.parse(allUsers);

  return user;
};
