import { config } from "dotenv";
config();

import cors from "cors";
import express from "express";
import { connect } from "mongoose";

import { conferencesRouter } from "./routes/conferences";
import { speechesRouter } from "./routes/speeches";
import { speakersRouter } from "./routes/speakers";

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

const initDB = async () => {
  await connect(process.env.MONGO_URL!);

  app.listen(PORT);
  app.use("/", conferencesRouter);
  app.use("/", speechesRouter);
  app.use("/", speakersRouter);

  console.log(`listening on port ${PORT}: http://localhost:${PORT}`);
};
initDB();
