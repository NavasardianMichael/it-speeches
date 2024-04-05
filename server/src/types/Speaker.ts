import { Speech } from './Speech'

export type Speaker = {
    _id: string
    fullName: string
    company: string
    position: string
    speechIds: Speech['_id'][]
}