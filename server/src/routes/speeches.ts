import { Router } from "express";
import { SpeechModel } from "../models/Speech";

const router = Router();

router.get("/speeches", async (_, res) => {
  const speeches = await SpeechModel.find({});
  res.status(200).json(speeches);
});

router.post("/speeches", async (req, res) => {
  const speech = await SpeechModel.create(req.body);
  res.status(200).json(speech);
});

router.patch("/speeches", async (req, res) => {
  const partialSpeech = req.body;
  const existingSpeech = await SpeechModel.findById(partialSpeech.id);
  const updatedSpeech = { ...existingSpeech?.toObject(), ...req.body };

  const speech = await SpeechModel.findByIdAndUpdate(
    partialSpeech.id,
    updatedSpeech,
    { new: true },
  );

  res.status(200).json(speech);
});

export { router as speechesRouter };
