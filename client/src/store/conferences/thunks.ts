import { getConferences, postConferenceOptions } from '@api/conferences/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { setConferenceOptions, setConferences } from './slice'
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
      const data = await postConferenceOptions(conference)
      dispatch(setConferenceOptions(data))

    } catch (e) {
      const error = e as Error
      rejectWithValue(error)
    }
  }
)

// export const setUserOptionsAsync = createAppAsyncThunk(
//   'users/setUserOptions',
//   async (params: TUsersActionPayloads['setUserOptions'], { dispatch, rejectWithValue }) => {
//     try {
//       const data = await putUserOptions(params)
//       dispatch(setUserOptions(data))

//       return data
//     } catch (e) {
//       const error = e as globalThis.Error
//       rejectWithValue(error)
//     }
//   }
// )
