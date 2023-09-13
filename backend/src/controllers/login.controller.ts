import { LoginService } from "../services/login.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class LoginController {
  public async login(req: Request, res: Response) {
    const data: IUser = req.body;

    const session = await new LoginService().login(data);

    return res.json(session);
  }
}

export { LoginController };
