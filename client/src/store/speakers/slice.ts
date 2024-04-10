import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { getSliceActionGroup } from '@helpers/utils/store'
import { SpeakersActionPayloads, SpeakersSlice } from './types'

const speakersActionTypeMatcher = getSliceActionGroup(STATE_SLICE_NAMES.speakers)

const initialState: SpeakersSlice = {
  byId: {},
  allIds: [],
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
    setSpeakerOptions: (state, { payload }: PayloadAction<SpeakersActionPayloads['setSpeakerOptions']>) => {
      state.byId[payload.id] = {
        ...state.byId[payload.id],
        ...payload,
      }
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

export const { setSpeakers, se } = speakersSlice.actions

export default speakersSlice.reducer
