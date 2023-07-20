import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import mongoose from "mongoose";
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// DATABASE CONNECTON

dotenv.config({ path: "./config.env" });
const local = "mongodb://localhost:27017/caloriescounter";
const db = process.env.DATABASE;
const main = async () => {
  const con = await mongoose.connect(db);
  console.log("scc connect to db");
};
main().catch((err) => console.log(err));

// MAIN ROUTE

app.use("/api/v1/food", foodRouter);
app.use("/api/v1/user", userRouter);
const port = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
