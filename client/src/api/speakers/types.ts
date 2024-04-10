import { Speaker } from '@store/speakers/types'
import { ResponseForEntity } from '@helpers/types/api'

export type GetSpeakersResponse = SpeakerResponse[]

export type SpeakerResponse = ResponseForEntity<Speaker>
