import { getSpeeches, postSpeechOptions } from '@api/speeches/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { addSpeech, setSpeechOptions, setSpeeches } from './slice'
import { Speech } from './types'
import { TEMP_IDS } from '@helpers/constants/defaults'

export const getSpeechesAsync = createAppAsyncThunk(
  'speeches/getSpeechesAsync',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await getSpeeches()
      dispatch(setSpeeches(data))

      return data
    } catch (e) {
      const error = e as globalThis.Error
      rejectWithValue(error)
    }
  }
)

export const setSpeechOptionsAsync = createAppAsyncThunk<unknown, Speech>(
  'speeches/setSpeechOptionsAsync',
  async (speech, { dispatch, rejectWithValue }) => {
    try {
      const isNewSpeech = speech.id === TEMP_IDS.speeches
      const data = await postSpeechOptions(speech, isNewSpeech)
      dispatch(isNewSpeech ? addSpeech(data) : setSpeechOptions(data))
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)

