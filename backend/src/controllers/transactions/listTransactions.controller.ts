import { listTransactionsService } from "../../services/transactions/listTransactions.service";
import { userRepository } from "../../repositories/user.repository";
import { Request, Response } from "express";

const listTransactionsController = async (req: Request, res: Response) => {
  const username: string = req.username;

  const user = await userRepository.findOneBy({ username });

  const listTransactions = await listTransactionsService(user!.accountId.id);

  return res.json(listTransactions);
};

export { listTransactionsController };
