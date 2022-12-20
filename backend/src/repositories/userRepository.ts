import { AppDataSource } from "../data-source";
import { User } from "../entities/users";

const userRepository = AppDataSource.getRepository(User);

export { userRepository };
