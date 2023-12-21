import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js";
import Ulas from "./models/UlasModel.js";
import Akun from "./models/akunModels.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Connection has been established successfully.");
  await Akun.sync();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser())
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server started on port 5000"));
