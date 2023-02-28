import { AccountsService } from "../services/accounts.service";
import { Request, Response } from "express";

class AccountController {
  async specific(req: Request, res: Response) {
    const id: string = req.params.id;

    const specificAccount = await new AccountsService().specific(id);

    return res.json(specificAccount);
  }
}

export { AccountController };
