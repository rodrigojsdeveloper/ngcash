import { viewProfileService } from "../../services/users/viewProfile.service";
import { Request, Response } from "express";

const viewProfileController = async (req: Request, res: Response) => {
  const username: string = req.username;

  const profile = await viewProfileService(username);

  return res.json(profile);
};

export { viewProfileController };
