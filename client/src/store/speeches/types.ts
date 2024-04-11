import { Conference } from '@store/conferences/types'
import { Speaker } from '@store/speakers/types'
import { Normalized, PartialButRequired } from '@helpers/types/commons'
import { SliceCommonProps } from '@helpers/types/store'

export type SpeechesSlice = Normalized<Speech> & SliceCommonProps

export type Speech = {
  id: string
  topic: string
  duration: string
  image: string
  conferenceId: Conference['id']
  speakerId: Speaker['id']
}

export type SpeechesActionPayloads = {
  setSpeeches: Normalized<Speech>
  setSpeechOptions: PartialButRequired<Speech, 'id'>
}
