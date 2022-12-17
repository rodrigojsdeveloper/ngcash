import { accountRepository } from "../../repositories/account.repository";
import { userRepository } from "../../repositories/user.repository";
import { IUserRequest } from "../../interfaces/users";
import { Account } from "../../entities/accounts";
import { User } from "../../entities/users";
import { AppError } from "../../errors";
import { hash } from "bcrypt";

const createUserService = async (
  user: IUserRequest
): Promise<{
  username: string;
  accountId: string;
}> => {
  const account = new Account();
  account.balance = 100;

  const newAccount = accountRepository.create(account);
  await accountRepository.save(newAccount);

  if (await userRepository.findOneBy({ username: user.username })) {
    throw new AppError("Username already exists");
  }

  const passwordHashed = await hash(user.password, 10);

  const newUser = new User();
  newUser.username = user.username;
  newUser.password = passwordHashed;
  newUser.accountId = newAccount;

  userRepository.create(newUser);
  await userRepository.save(newUser);

  const copyUser = {
    username: user.username,
    accountId: newAccount.id,
  };

  return copyUser;
};

export { createUserService };
