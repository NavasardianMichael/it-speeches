import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { STATE_SLICE_NAMES } from '@helpers/constants/store'
import { conferencesSlice } from './conference/slice'

const store = configureStore({
  reducer: combineReducers({
    [STATE_SLICE_NAMES.conferences]: conferencesSlice.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
