import { Speech } from '@store/speeches/types'
import { Normalized, PartialButRequired } from '@helpers/types/commons'
import { SliceCommonProps } from '@helpers/types/store'

export type ConferenceSlice = Normalized<Conference> & SliceCommonProps

export type Conference = {
  id: string
  name: string
  location: string
  image: string
  date: string
  speechIds: Speech['id'][]
}

export type ConferenceActionPayloads = {
  setConferences: Normalized<Conference>
  setConferenceOptions: PartialButRequired<Conference, 'id'>
}
