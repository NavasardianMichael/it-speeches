import { Speech } from './Speech'

export type Speaker = {
    id: string
    fullName: string
    company: string
    position: string
    speechIds: Speech['id'][]
}