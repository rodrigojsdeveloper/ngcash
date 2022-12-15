import { listTransactionsCashOutService } from "../../services/transactions/listTransactionsCashOut.service";
import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { User } from "../../entities/users";

const listTransactionsCashOutController = async (
  req: Request,
  res: Response
) => {
  const username: string = req.username;

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ username });

  const listCashOut = await listTransactionsCashOutService(user!.accountId.id);

  return res.json(listCashOut);
};

export { listTransactionsCashOutController };
