import { accountRepository } from "../repositories/account.repository";
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../errors/badRequest.error";
import { Account } from "../entities/accounts.entity";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersServices {
  async create(user: IUser): Promise<User> {
    const account = new Account();
    account.balance = 100;

    const newAccount = accountRepository.create(account);
    await accountRepository.save(newAccount);

    if (await userRepository.findOneBy({ username: user.username })) {
      throw new BadRequestError("Username already exists");
    }

    const hashedPassword = await hash(user.password, 10);

    const newUser = new User();
    newUser.username = user.username;
    newUser.password = hashedPassword;
    newUser.accountId = newAccount;

    userRepository.create(newUser);
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }

  async profile(username: string): Promise<User> {
    const user = await userRepository.findOneBy({ username });

    Reflect.deleteProperty(user!, "password");

    return user!;
  }
}

export { UsersServices };
