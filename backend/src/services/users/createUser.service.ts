import { accountRepository } from "../../repositories/account.repository";
import { userRepository } from "../../repositories/user.repository";
import { IUserRequest } from "../../interfaces/users";
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
