import { useEffect, useState } from 'react'
import { getConferencesAsync } from '@store/conferences/thunks'
import { getSpeakersAsync } from '@store/speakers/thunks'
import { getSpeechesAsync } from '@store/speeches/thunks'
import { useAppDispatch } from './useAppDispatch'

export const useAppInit = () => {
  const dispatch = useAppDispatch()
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initApp = async () => {
      const appData = await Promise.all([
        dispatch(getConferencesAsync()),
        dispatch(getSpeakersAsync()),
        dispatch(getSpeechesAsync()),
      ])

      if (appData) setIsInitialized(true)
    }
    initApp()
  }, [dispatch])

  return { isInitialized }
}
