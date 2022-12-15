import { IUserRequest } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import { Account } from "../../entities/accounts";
import { User } from "../../entities/users";
import { AppError } from "../../errors";
import { hash } from "bcrypt";

const createUserService = async ({
  username,
  password,
}: IUserRequest): Promise<{
  username: string;
  accountId: string;
}> => {
  const userRepository = AppDataSource.getRepository(User);

  const accountRepository = AppDataSource.getRepository(Account);

  const account = new Account();
  account.balance = 100;

  const newAccount = accountRepository.create(account);
  await accountRepository.save(newAccount);

  if (await userRepository.findOneBy({ username })) {
    throw new AppError("Username already exists");
  }

  const passwordHashed = await hash(password, 10);

  const user = new User();
  user.username = username;
  user.password = passwordHashed;
  user.accountId = newAccount;

  userRepository.create(user);
  await userRepository.save(user);

  const newUser = {
    username: user.username,
    accountId: newAccount.id,
  };

  return newUser;
};

export { createUserService };
