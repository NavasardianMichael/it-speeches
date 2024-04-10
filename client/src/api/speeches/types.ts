import { Speech } from '@store/speeches/types'
import { ResponseForEntity } from '@helpers/types/api'

export type GetSpeechesResponse = SpeechResponse[]

export type SpeechResponse = ResponseForEntity<Speech>
