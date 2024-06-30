import { RootState } from 'store'

export const selectConferences = (state: RootState) => state.conferences
export const selectIsConferenceEditModeActive = (state: RootState) => !!state.conferences.editableId
export const selectEditableConferenceId = (state: RootState) => state.conferences.editableId
export const selectEditableConference = (state: RootState) => state.conferences.byId[state.conferences.editableId]
export const selectIsConferencesPending = (state: RootState) => state.conferences.isPending
