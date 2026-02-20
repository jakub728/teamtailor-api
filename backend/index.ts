import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ZodError } from "zod";
import type { Request, Response, NextFunction } from "express";

dotenv.config();

const PORT = process.env.PORT || 7777;
const app = express();

app.use(express.json());
app.use(cors());



// app.use("/api/auth", AuthRoute);



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
