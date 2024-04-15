import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { getSliceActionGroup } from '@helpers/utils/store'
import { SpeechesActionPayloads, SpeechesSlice } from './types'

const SpeechesActionTypeMatcher = getSliceActionGroup(STATE_SLICE_NAMES.speeches)

const initialState: SpeechesSlice = {
  byId: {},
  allIds: [],
  editableId: '',
  isPending: false,
  errorMessage: '',
}

export const speechesSlice = createSlice({
  name: STATE_SLICE_NAMES.speeches,
  initialState,
  reducers: {
    setSpeeches: (state, { payload }: PayloadAction<SpeechesActionPayloads['setSpeeches']>) => {
      return {
        ...state,
        ...payload,
      }
    },
    addSpeech: (state, { payload }: PayloadAction<SpeechesActionPayloads['addSpeech']>) => {
      state.byId[payload.id] = payload
      state.allIds.push(payload.id)
    },
    setSpeechOptions: (state, { payload }: PayloadAction<SpeechesActionPayloads['setSpeechOptions']>) => {
      state.byId[payload.id] = {
        ...state.byId[payload.id],
        ...payload,
      }
    },
    setEditableSpeechId: (state, { payload }: PayloadAction<SpeechesActionPayloads['setEditableSpeechId']>) => {
      state.editableId = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(SpeechesActionTypeMatcher('/pending'), (state) => {
        state.isPending = true
      })
      .addMatcher(SpeechesActionTypeMatcher('/fulfilled'), (state) => {
        state.isPending = false
      })
      .addMatcher(SpeechesActionTypeMatcher('/rejected'), (state, action: PayloadAction<Error>) => {
        state.isPending = false
        state.errorMessage = action.payload.message
      })
  },
})

export const { setSpeeches, addSpeech, setSpeechOptions, setEditableSpeechId } = speechesSlice.actions

export default speechesSlice.reducer
