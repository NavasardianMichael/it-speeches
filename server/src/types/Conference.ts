import type { Speech } from './Speech'

export type Conference = {
    _id: string
    title: string
    location: string
    dates: {
        start: string
        end: string
    }
    speechIds: Speech['_id'][]
}