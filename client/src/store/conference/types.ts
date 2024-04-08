import { Normalized, PartialButRequired } from '@helpers/types/commons'
import { SliceCommonProps } from '@helpers/types/store'

export type ConferenceSlice = Normalized<Conference> & SliceCommonProps

export type Conference = {
  id: string
  name: string
  email: string
}

export type ConferenceActionPayloads = {
  setConferences: Normalized<Conference>
  setConferenceOptions: PartialButRequired<Conference, 'id'>
}
