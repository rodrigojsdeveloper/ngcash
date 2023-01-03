import { LoginServices } from "../services/login.service";
import { ISessionRequest } from "../interfaces/session";
import { Request, Response } from "express";

class LoginControllers {
  async login(req: Request, res: Response) {
    const data: ISessionRequest = req.body;

    const session = await new LoginServices().login(data);

    return res.json(session);
  }
}

export { LoginControllers };
