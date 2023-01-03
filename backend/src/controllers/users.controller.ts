import { UsersServices } from "../services/users.service";
import { IUser } from "../interfaces/user.interface";
import { Request, Response } from "express";

class UsersControllers {
  async create(req: Request, res: Response) {
    const data: IUser = req.body;

    const newUser = await new UsersServices().create(data);

    return res.status(201).json(newUser);
  }

  async profile(req: Request, res: Response) {
    const username: string = req.username;

    const profile = await new UsersServices().profile(username);

    return res.json(profile);
  }
}

export { UsersControllers };
