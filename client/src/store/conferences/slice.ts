import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { getSliceActionGroup } from '@helpers/utils/store'
import { ConferenceActionPayloads, ConferenceSlice } from './types'

const conferencesActionTypeMatcher = getSliceActionGroup(STATE_SLICE_NAMES.conferences)

const initialState: ConferenceSlice = {
  byId: {},
  allIds: [],
  isPending: false,
  errorMessage: '',
}

export const conferencesSlice = createSlice({
  name: STATE_SLICE_NAMES.conferences,
  initialState,
  reducers: {
    setConferences: (state, { payload }: PayloadAction<ConferenceActionPayloads['setConferences']>) => {
      return {
        ...state,
        ...payload,
      }
    },
    setConferenceOptions: (state, { payload }: PayloadAction<ConferenceActionPayloads['setConferenceOptions']>) => {
      state.byId[payload.id] = {
        ...state.byId[payload.id],
        ...payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getUsersAsync.pending, (state, action) => {
      //   state.isPending = true
      // })
      // .addCase(getUsersAsync.fulfilled, (state, action) => {
      //   state.isPending = false
      // })
      .addMatcher(conferencesActionTypeMatcher('/pending'), (state) => {
        state.isPending = true
      })
      .addMatcher(conferencesActionTypeMatcher('/fulfilled'), (state) => {
        state.isPending = false
      })
      .addMatcher(conferencesActionTypeMatcher('/rejected'), (state, action: PayloadAction<Error>) => {
        state.isPending = false
        state.errorMessage = action.payload.message
      })
  },
})

export const { setConferences, setConferenceOptions } = conferencesSlice.actions

export default conferencesSlice.reducer
