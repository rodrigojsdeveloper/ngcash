import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { IUserRequest } from "../interfaces/users";
import { User } from "../entities/users";
import { DataSource } from "typeorm";
import { hash } from "bcrypt";

const UserSeerder = class UserSeerder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const user: IUserRequest = {
      username: "johndoe",
      password: await hash("Johndoe@123", 10),
    };

    const anotherUser: IUserRequest = {
      username: "example",
      password: await hash("Example@123", 10),
    };

    if (!(await userRepository.findOneBy({ username: user.username }))) {
      const createdUser = userRepository.create(user);
      await userRepository.save(createdUser);
    }

    if (!(await userRepository.findOneBy({ username: anotherUser.username }))) {
      const createdAnotherUser = userRepository.create(anotherUser);
      await userRepository.save(createdAnotherUser);
    }
  }
};

export { UserSeerder };
