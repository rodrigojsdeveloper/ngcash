import { accountRepository } from "../repositories/accountRepository";
import { userRepository } from "../repositories/userRepository";
import { Request, Response, NextFunction } from "express";

const itsYourOwnBalanceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const username: string = req.username;

  const id: string = req.params.id;

  const user = await userRepository.findOneBy({ username });

  const accountToken = await accountRepository.findOneBy({
    id: user!.accountId.id,
  });

  const accountId = await accountRepository.findOneBy({ id });

  if (accountToken?.id != accountId?.id) {
    return res
      .status(403)
      .json({ message: "Only the user can see the balance" });
  }

  next();
};

export { itsYourOwnBalanceMiddleware };
