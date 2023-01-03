import { Request, Response } from "express";

class TermsControllers {
  async term(req: Request, res: Response) {
    return res.json({ message: "Terms and Services" });
  }
}

export { TermsControllers };
