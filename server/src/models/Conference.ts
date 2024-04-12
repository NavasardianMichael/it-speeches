import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConferenceSchema = new Schema({
    name: String,
    location: String,
    date: String,
    image: String,
    speechIds: [mongoose.Types.ObjectId]
});

export const ConferenceModel = mongoose.model('Conference', ConferenceSchema)