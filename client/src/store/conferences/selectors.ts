import { RootState } from 'store'

export const selectConferences = (state: RootState) => state.conferences
export const selectIsEditModeActive = (state: RootState) => !!state.conferences.editableId
export const selectEditableId = (state: RootState) => state.conferences.editableId
export const selectEditableConference = (state: RootState) => state.conferences.byId[state.conferences.editableId]
export const selectIsConferencesPending = (state: RootState) => state.conferences.isPending
