import { STATE_SLICE_NAMES } from './store'

export const TEMP_IDS = {
  [STATE_SLICE_NAMES.conferences]: 'temp-conference-id',
  [STATE_SLICE_NAMES.speeches]: 'temp-speeches-id',
  [STATE_SLICE_NAMES.speakers]: 'temp-speakers-id',
} as const

export const NEW_ENTITY_INITIAL_STATES = {
  [STATE_SLICE_NAMES.conferences]: {
    id: TEMP_IDS.conferences,
    name: '',
    date: '',
    image: '',
    location: '',
    speechIds: [],
  },
  [STATE_SLICE_NAMES.speeches]: {
    id: TEMP_IDS.speeches,
    topic: '',
    duration: '',
    image: '',
    conferenceId: '',
    speakerId: '',
  },
  [STATE_SLICE_NAMES.speakers]: {
    id: TEMP_IDS.speakers,
    fullName: '',
    position: '',
    image: '',
    speechIds: [],
  },
}
