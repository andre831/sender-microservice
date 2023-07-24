import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import { Server } from "./IServerService";

import emailRoutes from "../../routes/mailRoutes";

export class ExpressServer implements Server {
  public app: express.Express;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    this.app.use("/email", emailRoutes);
  }

  private errorHandler(
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ): void {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

  public start(): void {
    this.initializeMiddlewares();
    this.initializeRoutes();

    this.app.use(this.errorHandler);

    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
