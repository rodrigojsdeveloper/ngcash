import { Request, Response } from "express";

class TermsController {
  public async term(req: Request, res: Response) {
    return res.json({ message: "Terms and Services" });
  }
}

export { TermsController };
