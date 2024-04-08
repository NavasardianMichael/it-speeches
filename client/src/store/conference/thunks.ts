import { getConferences } from '@api/conferences/api'
import { createAppAsyncThunk } from '@helpers/utils/store'
import { setConferences } from './slice'

export const getConferencesAsync = createAppAsyncThunk(
  'conferences/getConferencesAsync',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      
      console.log({'data':468});
      const data = await getConferences()
      dispatch(setConferences(data))

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
