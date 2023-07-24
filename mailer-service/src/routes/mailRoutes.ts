import router from "./index";
import { Request, Response } from "express";

import MailCtrl from "../controller/mailController";

router.post("/send", async (req: Request, res: Response): Promise<any> => {
  const { to, subject, message } = req.body;

  const sent = await MailCtrl.sendEmail(to, subject, message);

  return res.json({ data: sent });
});

export default router;
