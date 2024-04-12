import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SpeechSchema = new Schema({
    topic: String,
    duration: String,
    image: String,
    conferenceId: mongoose.Types.ObjectId,
    speakerId: mongoose.Types.ObjectId,
});

export const SpeechModel = mongoose.model('Speech', SpeechSchema)