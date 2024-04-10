import { getSpeeches } from '@api/speeches/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { setSpeeches } from './slice'

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
