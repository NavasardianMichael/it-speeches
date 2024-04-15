import { getConferences, postConferenceOptions } from '@api/conferences/api'
import { TEMP_IDS } from '@helpers/constants/defaults'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { addConference, setConferenceOptions, setConferences } from './slice'
import { Conference } from './types'

export const getConferencesAsync = createAppAsyncThunk(
  'conferences/getConferencesAsync',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await getConferences()
      dispatch(setConferences(data))
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)

export const setConferenceOptionsAsync = createAppAsyncThunk<unknown, Conference>(
  'conferences/setConferenceOptionsAsync',
  async (conference, { dispatch, rejectWithValue }) => {
    try {
      const isNewConference = conference.id === TEMP_IDS.conferences
      const data = await postConferenceOptions(conference, isNewConference)
      dispatch(isNewConference ? addConference(data) : setConferenceOptions(data))
    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)
