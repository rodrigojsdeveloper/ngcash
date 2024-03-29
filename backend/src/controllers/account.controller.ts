import { AccountService } from "../services/accounts.service";
import { Request, Response } from "express";

class AccountController {
  public async specific(req: Request, res: Response) {
    const id: string = req.params.id;

    const specificAccount = await new AccountService().specific(id);

    return res.json(specificAccount);
  }
}

export { AccountController };
