import { ResponseForEntity } from '@helpers/types/api'
import { Conference } from '@store/conference/types'

export type GetConferencesResponse = ConferenceResponse[]

export type ConferenceResponse = ResponseForEntity<Conference>