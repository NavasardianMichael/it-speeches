import { appFetch } from 'helpers/utils/api'
import { processSpeakers } from './processors'
import { GetSpeakersResponse } from './types'

export const getSpeakers = async () => {
  const response = await appFetch<GetSpeakersResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speakers`,
  })

  const processed = processSpeakers(response)

  return processed
}
