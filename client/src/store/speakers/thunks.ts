import { getSpeakers } from '@api/speakers/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { setSpeakers } from './slice'

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
