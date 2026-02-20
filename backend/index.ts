import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ZodError } from "zod";
import type { Request, Response, NextFunction } from "express";
import userRouter from "./routes/userRouter.js";
import jobsRouter from "./routes/jobsRouter.js";

dotenv.config();

const PORT = process.env.PORT || 7777;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send("Server is running");
  } catch (error) {
    next(error);
  }
});

app.use("/api/users", userRouter);
app.use("/api/jobs", jobsRouter);

//!GLOBAL ERROR
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.stack) console.error(err.stack);

  const status = err.status || err.statusCode || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

//!LISTEN
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
