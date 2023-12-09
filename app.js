import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import morgan from "morgan";
import familyRouter from "./routes/familyRoute.js";

dotenv.config({
  path: "./config.env",
});

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());
app.use("/api/family", familyRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export { app };
