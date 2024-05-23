import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/student/product.route";
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());
// application routes
app.use("/api", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Success" });
});

export default app;
