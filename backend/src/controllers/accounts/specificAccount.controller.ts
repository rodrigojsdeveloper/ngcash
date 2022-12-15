import { specificAccountService } from "../../services/accounts/specificAccount.service";
import { Request, Response } from "express";

const specificAccountController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const specificAccount = await specificAccountService(id);

  return res.json(specificAccount);
};

export { specificAccountController };
