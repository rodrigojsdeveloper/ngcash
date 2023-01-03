import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { DataSource } from "typeorm";
import { hash } from "bcrypt";

const UserSeerder = class UserSeerder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    const user: IUser = {
      username: "johndoe",
      password: await hash("Johndoe@123", 10),
    };

    const anotherUser: IUser = {
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
