import { TransactionsServices } from "../services/transactions.service";
import { accountRepository } from "../repositories/accountRepository";
import { ITransactionRequest } from "../interfaces/transactions";
import { userRepository } from "../repositories/userRepository";
import { Request, Response } from "express";

class TransactionsControllers {
  async create(req: Request, res: Response) {
    const usernameDebt: string = req.username;

    const data: ITransactionRequest = req.body;

    const userDebitedId = await userRepository.findOneBy({
      username: usernameDebt,
    });

    const debitedId = await accountRepository.findOneBy({
      id: userDebitedId!.accountId.id,
    });

    const newTransaction = await new TransactionsServices().create(
      debitedId!.id,
      data
    );

    return res.status(201).json(newTransaction);
  }

  async list(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listTransactions = await new TransactionsServices().list(
      user!.accountId.id
    );

    return res.json(listTransactions);
  }

  async listCashIn(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listCashIn = await new TransactionsServices().listCashIn(
      user!.accountId.id
    );

    return res.json(listCashIn);
  }

  async listCashOut(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listCashOut = await new TransactionsServices().listCashOut(
      user!.accountId.id
    );

    return res.json(listCashOut);
  }

  async listOfCreatedAt(req: Request, res: Response) {
    const username: string = req.username;

    const date: string = req.params.date;

    const user = await userRepository.findOneBy({ username });

    const listCashOut = await new TransactionsServices().listOfCreatedAt(
      user!.accountId.id,
      date
    );

    return res.json(listCashOut);
  }
}

export { TransactionsControllers };
