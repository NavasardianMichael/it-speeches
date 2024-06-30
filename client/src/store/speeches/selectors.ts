import { RootState } from 'store'

export const selectSpeeches = (state: RootState) => state.speeches
export const selectIsSpeechEditModeActive = (state: RootState) => !!state.speeches.editableId
export const selectEditableSpeechId = (state: RootState) => state.speeches.editableId
export const selectEditableSpeech = (state: RootState) => state.speeches.byId[state.speeches.editableId]
export const selectIsSpeechesPending = (state: RootState) => state.speeches.isPending
