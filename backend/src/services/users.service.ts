import { accountRepository } from "../repositories/account.repository";
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../errors/badRequest.error";
import { NotFoundError } from "../errors/notFound.error";
import { Account } from "../entities/accounts.entity";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersService {
  public async create(
    user: IUser
  ): Promise<{ id: string; username: string; accountId: string }> {
    const existingUser = await userRepository.findOneBy({
      username: user.username,
    });

    if (existingUser) {
      throw new BadRequestError("Username already exists");
    }

    const account = new Account();
    account.balance = 100;

    const newAccount = accountRepository.create(account);
    await accountRepository.save(newAccount);

    const hashedPassword = await hash(user.password, 10);

    const newUser = new User();
    newUser.username = user.username;
    newUser.password = hashedPassword;
    newUser.accountId = newAccount;

    userRepository.create(newUser);
    await userRepository.save(newUser);

    const copyUser = {
      id: newUser.id,
      username: newUser.username,
      accountId: newUser.accountId.id,
    };

    return copyUser;
  }

  public async profile(username: string): Promise<User> {
    const user = await userRepository.findOneBy({ username });

    if (!user) {
      throw new NotFoundError("User");
    }

    Reflect.deleteProperty(user, "password");

    return user;
  }
}

export { UsersService };
