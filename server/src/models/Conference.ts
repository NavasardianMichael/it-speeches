import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ConferenceSchema = new Schema({
    title: String,
    location: String,
    dates: {
        start: String,
        end: String,
    },
    speechIds: [mongoose.Types.ObjectId]
});

export const ConferenceModel = mongoose.model('Conference', ConferenceSchema)