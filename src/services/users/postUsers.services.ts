import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Users } from "../../entities";
import { tReturnUsers, tUsers } from "../../interfaces";
import { returnuserSchemPasswordOmit } from "../../schemas";

export const postUserServices = async (
  userData: tUsers
): Promise<tReturnUsers> => {
  const userRepository: Repository<Users> = AppDataSource.getRepository(Users);

  const user = userRepository.create({
    ...userData,
  });

  await userRepository.save(user);

  const newUser = returnuserSchemPasswordOmit.parse(user);

  return newUser;
};
