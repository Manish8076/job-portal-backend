import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connnectDB from "./utils/db.config.js";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js"

dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors error resolve to connect frontend
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

// all api's
app.use("/api/v1/user", userRouter);
app.use("/api/v1/company", companyRouter);

app.listen(process.env.PORT, () => {
  connnectDB();
  console.log("Server is listening on port 3000");
});
