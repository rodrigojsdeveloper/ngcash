import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users";

const viewProfileService = async (username: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ username });

  Reflect.deleteProperty(user!, "password");

  return user!;
};

export { viewProfileService };
