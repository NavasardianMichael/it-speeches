import { Action, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@store'
import { StateSliceName } from '@helpers/types/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: Error
  extra: unknown
}>()

export const getSliceActionGroup = (name: StateSliceName) => {
  return (groupName: string) => {
    return (action: Action) => action.type.startsWith(name) && action.type.endsWith(groupName)
  }
}
