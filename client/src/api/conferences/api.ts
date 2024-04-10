import { appFetch } from 'helpers/utils/api'
import { Conference } from '@store/conferences/types'
import { TEMP_IDS } from '@helpers/constants/store'
import { PartialButRequired } from '@helpers/types/commons'
import { processConferences } from './processors'
import { ConferenceResponse, GetConferencesResponse } from './types'

export const getConferences = async () => {
  console.log('called getConferences')

  const response = await appFetch<GetConferencesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
  })
  console.log({ response })

  const processed = processConferences(response)

  return processed
}

export const setConferenceOptions = async (options: PartialButRequired<Conference, 'id'>) => {
  const response = await appFetch<ConferenceResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speakers`,
    params: {
      method: options.id === TEMP_IDS.conferences ? 'POST' : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    },
  })
  console.log({ response })

  return response
}
