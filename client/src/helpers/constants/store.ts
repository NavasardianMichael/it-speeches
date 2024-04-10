export const STATE_SLICE_NAMES = {
  conferences: 'conferences',
  speeches: 'speeches',
  speakers: 'speakers',
} as const

export const TEMP_IDS = {
  [STATE_SLICE_NAMES.conferences]: 'temp-conference-id',
  [STATE_SLICE_NAMES.speeches]: 'temp-speeches-id',
  [STATE_SLICE_NAMES.speakers]: 'temp-speakers-id',
} as const
