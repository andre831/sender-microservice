import { Router, Request, Response } from "express";

const router = Router();

router.get("/users", (req: Request, res: Response) => {
  res.send("Email Users");
});

export default router;
