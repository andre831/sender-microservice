import { Request, Response } from "express";

import MailService from "../services/mailService/mailService";

class MailCtrl {
  private _mailService: MailService;

  constructor() {
    this._mailService = new MailService();
  }

  public async oi(req: Request, res: Response): Promise<any> {
    return res.status(200).json({ message: "Sent ready" });
  }

  public async sendEmail(
    to: string,
    subject: string,
    message: string
  ): Promise<void> {
    try {
      return await this._mailService.sendEmail(to, subject, message);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  }
}

export default new MailCtrl();
