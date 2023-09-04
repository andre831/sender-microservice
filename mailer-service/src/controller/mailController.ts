import MailService from "../services/mailService/MailService";
import ProducerService from "../services/producerService/ProducerService";

class MailCtrl {
  private _mailService: MailService;
  private _producerService: ProducerService;

  constructor() {
    this._mailService = new MailService();
    this._producerService = new ProducerService();
  }

  public async sendEmail(
    to: string,
    subject: string,
    message: string
  ): Promise<void> {
    try {
      return await this._producerService.processMails(message, "teste");
    } catch (error) {
      throw error;
    }
  }
}

export default new MailCtrl();
