import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SpeechSchema = new Schema({
  topic: String,
  duration: String,
  image: String,
  conferenceId: String,
  speakerId: String,
});

export const SpeechModel = mongoose.model("Speech", SpeechSchema);
