import cors from "cors";
import { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const keepActiveController = (app: Express): void => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "production") {
      app.use(cors({ origin: "https://keep-active-backend.onrender.com" }));
    } else {
      app.use(cors());
    }

    app.post("/api/keep-active", (req: Request, res: Response) => {
      try {
        console.log(req.body);

        res
          .status(200)
          .json({ status: "success", message: `Hi from ${req.body.appName}` });
      } catch (error) {
        console.warn(error);
        res.status(500).json({ status: "fail", message: error.message });
      }
    });

    next();
  });
};

export { keepActiveController };
