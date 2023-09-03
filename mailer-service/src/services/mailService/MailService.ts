import AWS from "aws-sdk";
import nodemailer from "nodemailer";

import { apiKey, regionKey, mailKey, secretKey } from "../../../config";
import { Mail } from "./IMailService";

class MailService implements Mail {
  private transporter: nodemailer.Transporter;
  private mail: string;

  constructor() {
    this.mail = mailKey as string;

    const ses = new AWS.SES({
      accessKeyId: apiKey,
      secretAccessKey: secretKey,
      region: regionKey,
    });

    this.transporter = nodemailer.createTransport({ SES: { ses, aws: AWS } });
  }

  public async sendEmail(
    to: string,
    subject: string,
    message: string
  ): Promise<void> {
    const opts: nodemailer.SendMailOptions = {
      from: this.mail,
      to,
      subject,
      text: message,
    };

    try {
      return await this.transporter.sendMail(opts);
    } catch (error) {
      throw new Error(error as string);
    }
  }
}

export default MailService;
