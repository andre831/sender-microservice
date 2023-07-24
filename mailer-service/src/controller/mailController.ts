import { Request, Response } from "express";

import MailService from "../services/mailService/mailService";

class MailCtrl {
  private _mailService: MailService;

  constructor() {
    this._mailService = new MailService();
  }

  public async sendEmail(
    to: string,
    subject: string,
    message: string
  ): Promise<void> {
    try {
      return await this._mailService.sendEmail(to, subject, message);
    } catch (error) {
      throw error;
    }
  }
}

export default new MailCtrl();
