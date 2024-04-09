import { Conference } from '@store/conference/types'
import { ResponseForEntity } from '@helpers/types/api'

export type GetConferencesResponse = ConferenceResponse[]

export type ConferenceResponse = ResponseForEntity<Conference>
