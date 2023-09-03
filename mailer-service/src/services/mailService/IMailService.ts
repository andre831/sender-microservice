export interface Mail {
  sendEmail(to: string, subject: string, message: string): Promise<void>;
}
