import { Request, Response } from "express";

class TermsController {
  async term(req: Request, res: Response) {
    return res.json({ message: "Terms and Services" });
  }
}

export { TermsController };
