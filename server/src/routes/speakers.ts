import { Router } from "express";
import { SpeakerModel } from "../models/Speaker";

const router = Router();

router.get("/speakers", async (_, res) => {
  const speakers = await SpeakerModel.find({});
  res.status(200).json(speakers);
});

router.post("/speakers", async (req, res) => {
  const speaker = new SpeakerModel(req.body);
  const createdSpeaker = await speaker.save();
  res.json(createdSpeaker);
});

router.patch("/speakers", async (req, res) => {
  const partialSpeech = req.body;
  const existingSpeech = await SpeakerModel.findById(partialSpeech.id);
  const updatedSpeech = { ...existingSpeech?.toObject(), ...req.body };

  const speech = await SpeakerModel.findByIdAndUpdate(
    partialSpeech.id,
    updatedSpeech,
    { new: true },
  );

  res.status(200).json(speech);
});

export { router as speakersRouter };
