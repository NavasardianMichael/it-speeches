import { Speech } from '@store/speeches/types'
import { Normalized, PartialButRequired } from '@helpers/types/commons'
import { SliceCommonProps } from '@helpers/types/store'

export type SpeakersSlice = Normalized<Speaker> & SliceCommonProps

export type Speaker = {
  id: string
  fullName: string
  position: string
  image: string
  speechIds: Speech['id'][]
}

export type SpeakersActionPayloads = {
  setSpeakers: Normalized<Speaker>
  addSpeaker: Speaker
  setSpeakerOptions: PartialButRequired<Speaker, 'id'>
  setEditableSpeakerId: Speaker['id']
}
