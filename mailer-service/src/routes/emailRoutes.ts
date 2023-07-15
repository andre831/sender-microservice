import router from "./index";
import { Request, Response } from "express";

router.get("/users", (req: Request, res: Response) => {
  res.send("Email Users");
});

export default router;
