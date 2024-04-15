import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { getSliceActionGroup } from '@helpers/utils/store'
import { SpeakersActionPayloads, SpeakersSlice } from './types'

const speakersActionTypeMatcher = getSliceActionGroup(STATE_SLICE_NAMES.speakers)

const initialState: SpeakersSlice = {
  byId: {},
  allIds: [],
  editableId: '',
  isPending: false,
  errorMessage: '',
}

export const speakersSlice = createSlice({
  name: STATE_SLICE_NAMES.speakers,
  initialState,
  reducers: {
    setSpeakers: (state, { payload }: PayloadAction<SpeakersActionPayloads['setSpeakers']>) => {
      return {
        ...state,
        ...payload,
      }
    },
    addSpeaker: (state, { payload }: PayloadAction<SpeakersActionPayloads['addSpeaker']>) => {
      state.byId[payload.id] = payload
      state.allIds.push(payload.id)
    },
    setSpeakerOptions: (state, { payload }: PayloadAction<SpeakersActionPayloads['setSpeakerOptions']>) => {
      state.byId[payload.id] = {
        ...state.byId[payload.id],
        ...payload,
      }
    },
    setEditableSpeakerId: (state, { payload }: PayloadAction<SpeakersActionPayloads['setEditableSpeakerId']>) => {
      state.editableId = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(speakersActionTypeMatcher('/pending'), (state) => {
        state.isPending = true
      })
      .addMatcher(speakersActionTypeMatcher('/fulfilled'), (state) => {
        state.isPending = false
      })
      .addMatcher(speakersActionTypeMatcher('/rejected'), (state, action: PayloadAction<Error>) => {
        state.isPending = false
        state.errorMessage = action.payload.message
      })
  },
})

export const { setSpeakers, addSpeaker, setSpeakerOptions, setEditableSpeakerId } = speakersSlice.actions

export default speakersSlice.reducer
