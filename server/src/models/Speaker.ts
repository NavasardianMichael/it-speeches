import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SpeakerSchema = new Schema({
  fullName: String,
  position: String,
  image: String,
  speechIds: [String],
});

export const SpeakerModel = mongoose.model("Speaker", SpeakerSchema);
