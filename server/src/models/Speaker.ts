import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SpeakerSchema = new Schema({
    fullName: String,
    position: String,
    icon: String,
    speechIds: [mongoose.Types.ObjectId],
});

export const SpeechModel = mongoose.model('Speaker', SpeakerSchema)