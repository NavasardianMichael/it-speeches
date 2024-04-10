import { Conference } from '@store/conferences/types'
import { ResponseForEntity } from '@helpers/types/api'

export type GetConferencesResponse = ConferenceResponse[]

export type ConferenceResponse = ResponseForEntity<Conference>
