import { createAsyncThunk } from '@reduxjs/toolkit'
import { TAppDispatch, TRootState } from 'store'
import { StateSliceName } from '@helpers/types/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: TRootState
  dispatch: TAppDispatch
  rejectValue: Error
  extra: unknown
}>()

export const getSliceActionGroup = (name: StateSliceName) => {
  return (groupName: string) => {
    return (action) => action.type.startsWith(name) && action.type.endsWith(groupName)
  }
}
