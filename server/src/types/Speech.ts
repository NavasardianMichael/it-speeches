import { Conference } from './Conference'
import { Speaker } from './Speaker'

export type Speech = {
    _id: string
    topic: string
    dates: {
        start: string
        end: string
    }
    conferenceId: Conference['_id']
    speakerId: Speaker['_id']
}