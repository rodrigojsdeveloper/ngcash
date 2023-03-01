import { TransactionsService } from "../services/transactions.service";
import { accountRepository } from "../repositories/account.repository";
import { ITransaction } from "../interfaces/transaction.interface";
import { userRepository } from "../repositories/user.repository";
import { Request, Response } from "express";

class TransactionsController {
  public async create(req: Request, res: Response) {
    const usernameDebt: string = req.username;

    const data: ITransaction = req.body;

    const userDebitedId = await userRepository.findOneBy({
      username: usernameDebt,
    });

    const debitedId = await accountRepository.findOneBy({
      id: userDebitedId!.accountId.id,
    });

    const newTransaction = await new TransactionsService().create(
      debitedId!.id,
      data
    );

    return res.status(201).json(newTransaction);
  }

  public async list(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listTransactions = await new TransactionsService().list(
      user!.accountId.id
    );

    return res.json(listTransactions);
  }

  public async listCashIn(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listCashIn = await new TransactionsService().listCashIn(
      user!.accountId.id
    );

    return res.json(listCashIn);
  }

  public async listCashOut(req: Request, res: Response) {
    const username: string = req.username;

    const user = await userRepository.findOneBy({ username });

    const listCashOut = await new TransactionsService().listCashOut(
      user!.accountId.id
    );

    return res.json(listCashOut);
  }

  public async listOfCreatedAt(req: Request, res: Response) {
    const username: string = req.username;

    const date: string = req.params.date;

    const user = await userRepository.findOneBy({ username });

    const listCashOut = await new TransactionsService().listOfCreatedAt(
      user!.accountId.id,
      date
    );

    return res.json(listCashOut);
  }
}

export { TransactionsController };
