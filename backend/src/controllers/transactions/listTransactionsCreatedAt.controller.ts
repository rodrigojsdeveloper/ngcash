import { listTransactionsCreatedAtService } from "../../services/transactions/listTransactionsCreatedAt.service";
import { userRepository } from "../../repositories/userRepository";
import { Request, Response } from "express";

const listTransactionsCreatedAtController = async (
  req: Request,
  res: Response
) => {
  const username: string = req.username;

  const date: string = req.params.date;

  const user = await userRepository.findOneBy({ username });

  const listCashOut = await listTransactionsCreatedAtService(
    user!.accountId.id,
    date
  );

  return res.json(listCashOut);
};

export { listTransactionsCreatedAtController };
