import { createTransactionService } from "../../services/transactions/createTransaction.service";
import { accountRepository } from "../../repositories/account.repository";
import { ITransactionRequest } from "../../interfaces/transactions";
import { userRepository } from "../../repositories/user.repository";
import { Request, Response } from "express";

const createTransactionController = async (req: Request, res: Response) => {
  const usernameDebt: string = req.username;

  const data: ITransactionRequest = req.body;

  const user_debited_id = await userRepository.findOneBy({
    username: usernameDebt,
  });

  const debited_id = await accountRepository.findOneBy({
    id: user_debited_id!.accountId.id,
  });

  const newTransaction = await createTransactionService(debited_id!.id, data);

  return res.status(201).json(newTransaction);
};

export { createTransactionController };
