import router from "./index";
import { Request, Response } from "express";

import MailCtrl from "../controller/mailController";

router.post("/send", async (req: Request, res: Response): Promise<any> => {
  const { message } = req.body;

  const to = "to";
  const subject = "sub";

  try {
    await MailCtrl.sendEmail(to, subject, message).then(() => {
      return res.status(200).json({ data: "Successful" });
    });
  } catch {
    return res.status(500).json({ msg: "Error to send mail" });
  }
});

export default router;
