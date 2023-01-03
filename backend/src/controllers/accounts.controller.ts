import { AccountsServices } from "../services/accounts.service";
import { Request, Response } from "express";

class AccountControllers {
  async specific(req: Request, res: Response) {
    const id: string = req.params.id;

    const specificAccount = await new AccountsServices().specific(id);

    return res.json(specificAccount);
  }
}

export { AccountControllers };
