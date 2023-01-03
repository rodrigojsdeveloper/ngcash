import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository(User);

export { userRepository };
