import { RootState } from 'store'

export const selectSpeakers = (state: RootState) => state.speakers
export const selectIsSpeakerEditModeActive = (state: RootState) => !!state.speakers.editableId
export const selectEditableSpeakerId = (state: RootState) => state.speakers.editableId
export const selectEditableSpeaker = (state: RootState) => state.speakers.byId[state.speakers.editableId]
export const selectIsSpeakersPending = (state: RootState) => state.speakers.isPending
