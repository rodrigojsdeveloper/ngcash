import { UsersService } from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UsersController {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersService().create(data);

    return res.status(201).json(newUser);
  }

  async profile(req: Request, res: Response) {
    const username: string = req.username;

    const profile = await new UsersService().profile(username);

    return res.json(profile);
  }
}

export { UsersController };
