import { Router } from "express";
import { ConferenceModel } from "../models/Conference";

const router = Router();

router.get("/conferences", async (req, res) => {
  const conferences = await ConferenceModel.find({});
  res.status(200).json(conferences);
});

router.post("/conferences", async (req, res) => {
  const conference = await ConferenceModel.create(req.body);
  res.status(200).json(conference);
});

router.patch("/conferences", async (req, res) => {
  const partialConference = req.body;
  const existingConference = await ConferenceModel.findById(
    partialConference.id,
  );

  const updatedConference = { ...existingConference?.toObject(), ...req.body };
  const conference = await ConferenceModel.findByIdAndUpdate(
    partialConference.id,
    updatedConference,
    { new: true },
  );
  res.status(200).json(conference);
});

export { router as conferencesRouter };
