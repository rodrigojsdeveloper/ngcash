import { accountRepository } from "../../repositories/account.repository";

const specificAccountService = async (id: string): Promise<object> => {
  const account = await accountRepository.findOneBy({ id });

  return { balance: account!.balance };
};

export { specificAccountService };
