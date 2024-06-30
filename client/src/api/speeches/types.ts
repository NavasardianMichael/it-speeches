import { Speech } from '@store/speeches/types'
import { ResponseRow } from '@helpers/types/api'

export type GetSpeechesResponse = SpeechResponse[]

export type SpeechResponse = ResponseRow<Speech>
