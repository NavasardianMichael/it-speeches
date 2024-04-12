import { TEMP_IDS } from '@helpers/constants/defaults'
import { RootState } from 'store'

export const selectConferences = (state: RootState) => state.conferences
export const selectIsNewConferenceEditableId = (state: RootState) => state.conferences.editableId === TEMP_IDS.conferences
export const selectEditableId = (state: RootState) => state.conferences.editableId
export const selectEditableConference = (state: RootState) => state.conferences.byId[state.conferences.editableId]
