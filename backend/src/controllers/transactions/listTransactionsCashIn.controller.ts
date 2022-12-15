import { listTransactionsCashInService } from "../../services/transactions/listTransactionsCashIn.service";
import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { User } from "../../entities/users";

const listTransactionsCashInController = async (
  req: Request,
  res: Response
) => {
  const username: string = req.username;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ username });

  const listCashIn = await listTransactionsCashInService(user!.accountId.id);

  return res.json(listCashIn);
};

export { listTransactionsCashInController };
