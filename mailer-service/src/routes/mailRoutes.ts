import router from "./index";
import { Request, Response } from "express";

import MailCtrl from "../controller/mailController";

router.post("/send", async (req: Request, res: Response): Promise<any> => {
  const { to, subject, message } = req.body;

  try {
    const sent = await MailCtrl.sendEmail(to, subject, message);

    return res.status(200).json({ data: "Rodou" });
  } catch {
    return res.status(500).json({ msg: "Error to sent mail" });
  }
});

export default router;
