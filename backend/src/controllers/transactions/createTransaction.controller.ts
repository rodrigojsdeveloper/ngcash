import { createTransactionService } from "../../services/transactions/createTransaction.service";
import { accountRepository } from "../../repositories/account.repository";
import { ITransactionRequest } from "../../interfaces/transactions";
import { userRepository } from "../../repositories/user.repository";
import { Request, Response } from "express";

const createTransactionController = async (req: Request, res: Response) => {
  const usernameDebt: string = req.username;

  const data: ITransactionRequest = req.body;

  const userDebitedId = await userRepository.findOneBy({
    username: usernameDebt,
  });

  const debitedId = await accountRepository.findOneBy({
    id: userDebitedId!.accountId.id,
  });

  const newTransaction = await createTransactionService(debitedId!.id, data);

  return res.status(201).json(newTransaction);
};

export { createTransactionController };
