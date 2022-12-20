import { listTransactionsCashInService } from "../../services/transactions/listTransactionsCashIn.service";
import { userRepository } from "../../repositories/userRepository";
import { Request, Response } from "express";

const listTransactionsCashInController = async (
  req: Request,
  res: Response
) => {
  const username: string = req.username;

  const user = await userRepository.findOneBy({ username });

  const listCashIn = await listTransactionsCashInService(user!.accountId.id);

  return res.json(listCashIn);
};

export { listTransactionsCashInController };
