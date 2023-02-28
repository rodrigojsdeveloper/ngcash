import { transactionRepository } from "../repositories/transaction.repository";
import { accountRepository } from "../repositories/account.repository";
import { ITransaction } from "../interfaces/transaction.interface";
import { userRepository } from "../repositories/user.repository";
import { Transaction } from "../entities/transactions.entity";
import { BadRequestError } from "../errors/badRequest.error";
import { ForbiddenError } from "../errors/forbidden.error";
import { NotFoundError } from "../errors/notFound.error";

class TransactionsServices {
  public async create(
    debitedId: string,
    transaction: ITransaction
  ): Promise<Transaction> {
    const user = await userRepository.findOneBy({
      username: transaction.username,
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    const debitedAccount = await accountRepository.findOneBy({ id: debitedId });

    const creditedAccount = await accountRepository.findOneBy({
      id: user.accountId.id,
    });

    if (!creditedAccount) {
      throw new NotFoundError("Credited Account");
    }

    if (!debitedAccount) {
      throw new NotFoundError("Debited Account");
    }

    if (debitedAccount.id === creditedAccount.id) {
      throw new ForbiddenError("The user cannot make transactions for himself");
    }

    if (transaction.value > Number(debitedAccount.balance) ?? 0) {
      throw new BadRequestError("Insufficient debt");
    }

    creditedAccount.balance += transaction.value;
    debitedAccount.balance -= transaction.value;

    await accountRepository.save(creditedAccount);
    await accountRepository.save(debitedAccount);

    const newTransaction = new Transaction();
    newTransaction.creditedAccountId = creditedAccount.id;
    newTransaction.debitedAccountId = debitedId;
    newTransaction.value = transaction.value;

    transactionRepository.create(newTransaction);
    await transactionRepository.save(newTransaction);

    return newTransaction;
  }

  public async list(id: string): Promise<Array<Transaction>> {
    const account = await accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundError("Account");
    }

    return [...account.creditedTransaction, ...account.debitedTransaction];
  }

  public async listCashIn(id: string): Promise<Transaction[]> {
    const account = await accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundError("Account");
    }

    return account.creditedTransaction;
  }

  public async listCashOut(id: string): Promise<Transaction[]> {
    const account = await accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundError("Account");
    }

    return account.debitedTransaction;
  }

  public async listOfCreatedAt(
    id: string,
    date: string
  ): Promise<Array<Transaction>> {
    const account = await accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundError("Account");
    }

    const formatDate = (date: Date): string => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    };

    const filterTransactionsOnDate = async (
      transactions: Transaction[],
      date: string
    ): Promise<Transaction[]> =>
      transactions.filter(
        (transaction) => formatDate(transaction.createdAt) === date
      );

    const creditTransactionsOnDate = await filterTransactionsOnDate(
      account.creditedTransaction,
      date
    );
    const debitTransactionsOnDate = await filterTransactionsOnDate(
      account.debitedTransaction,
      date
    );

    return [...creditTransactionsOnDate, ...debitTransactionsOnDate];
  }
}

export { TransactionsServices };
