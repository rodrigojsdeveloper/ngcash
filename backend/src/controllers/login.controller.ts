import { LoginServices } from "../services/login.service";
import { ILogin } from "../interfaces/login.interface";
import { Request, Response } from "express";

class LoginControllers {
  async login(req: Request, res: Response) {
    const data: ILogin = req.body;

    const session = await new LoginServices().login(data);

    return res.json(session);
  }
}

export { LoginControllers };
