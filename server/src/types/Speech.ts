import { Conference } from './Conference'
import { Speaker } from './Speaker'
import { Tag } from './Tag'

export type Speech = {
    id: string
    topic: string
    duration: {
        start: string
        end: string
    }
    conferenceId: Conference['id']
    speakerId: Speaker['id']
    tagIds: Tag['id'][]
}