import { config } from "dotenv";
config();

import cors from "cors";
import express from "express";
import { connect } from "mongoose";

import { conferenceRouter } from "./routes/conference";
import { speechRouter } from './routes/speech';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const initDB = async () => {
  await connect(process.env.MONGO_URL!);

  app.listen(PORT);
  app.use("/", conferenceRouter);
  app.use("/", speechRouter);

  console.log(`listening on port ${PORT}: http://localhost:${PORT}`);
};
initDB();
