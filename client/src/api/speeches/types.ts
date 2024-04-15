import { ResponseRow } from '@helpers/types/api'
import { Speech } from '@store/speeches/types'

export type GetSpeechesResponse = SpeechResponse[]

export type SpeechResponse = ResponseRow<Speech>
