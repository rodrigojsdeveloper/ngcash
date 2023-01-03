import { accountRepository } from "../repositories/accountRepository";

class AccountsServices {
  async specific(id: string): Promise<{ balance: number }> {
    const account = await accountRepository.findOneBy({ id });

    return { balance: account!.balance };
  }
}

export { AccountsServices };
