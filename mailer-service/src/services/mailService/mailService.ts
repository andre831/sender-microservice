import AWS from "aws-sdk";
import nodemailer from "nodemailer";

class MailService {
  private transporter: nodemailer.Transporter;
  private mail: string;

  constructor() {
    this.mail = "python.sendemail0@gmail.com";

    const ses = new AWS.SES({
      accessKeyId: "", //,
      secretAccessKey: "",
      region: "us-east-2",
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

    return await this.transporter.sendMail(opts);
  }
}

export default MailService;
