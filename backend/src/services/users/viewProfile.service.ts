import { userRepository } from "../../repositories/userRepository";
import { User } from "../../entities/user.entity";

const viewProfileService = async (username: string): Promise<User> => {
  const user = await userRepository.findOneBy({ username });

  Reflect.deleteProperty(user!, "password");

  return user!;
};

export { viewProfileService };
