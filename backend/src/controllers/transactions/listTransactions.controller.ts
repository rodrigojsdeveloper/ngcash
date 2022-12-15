import { listTransactionsService } from "../../services/transactions/listTransactions.service";
import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { User } from "../../entities/users";

const listTransactionsController = async (req: Request, res: Response) => {
  const username: string = req.username;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ username });

  const listTransactions = await listTransactionsService(user!.accountId.id);

  return res.json(listTransactions);
};

export { listTransactionsController };
