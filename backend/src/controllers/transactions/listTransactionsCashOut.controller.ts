import { listTransactionsCashOutService } from "../../services/transactions/listTransactionsCashOut.service";
import { userRepository } from "../../repositories/user.repository";
import { Request, Response } from "express";

const listTransactionsCashOutController = async (
  req: Request,
  res: Response
) => {
  const username: string = req.username;

  const user = await userRepository.findOneBy({ username });

  const listCashOut = await listTransactionsCashOutService(user!.accountId.id);

  return res.json(listCashOut);
};

export { listTransactionsCashOutController };
