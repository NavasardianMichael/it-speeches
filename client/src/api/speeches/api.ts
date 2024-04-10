import { appFetch } from 'helpers/utils/api'
import { processSpeeches } from './processors'
import { GetSpeechesResponse } from './types'

export const getSpeeches = async () => {
  const response = await appFetch<GetSpeechesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speeches`,
  })

  const processed = processSpeeches(response)

  return processed
}
