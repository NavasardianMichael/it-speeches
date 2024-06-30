import { getSpeakers, postSpeakerOptions } from '@api/speakers/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { addSpeaker, setSpeakerOptions, setSpeakers } from './slice'
import { Speaker } from './types'
import { TEMP_IDS } from '@helpers/constants/defaults'

export const getSpeakersAsync = createAppAsyncThunk(
  'speakers/getSpeakersAsync',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await getSpeakers()
      dispatch(setSpeakers(data))

      return data
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)

export const setSpeakerOptionsAsync = createAppAsyncThunk<unknown, Speaker>(
  'speakers/setSpeakerOptionsAsync',
  async (speaker, { dispatch, rejectWithValue }) => {
    try {
      const isNewSpeaker = speaker.id === TEMP_IDS.speakers
      const data = await postSpeakerOptions(speaker, isNewSpeaker)
      dispatch(isNewSpeaker ? addSpeaker(data) : setSpeakerOptions(data))
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)
