import type { Speech } from './Speech'

export type Tag = {
    id: string
    name: string
    speechIds: Speech['_id'][]
}