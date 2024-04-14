import { appFetch, processResponseRow } from 'helpers/utils/api'
import { Conference } from '@store/conferences/types'
import { PartialButRequired } from '@helpers/types/commons'
import { processConferences } from './processors'
import { ConferenceResponse, GetConferencesResponse } from './types'
import { TEMP_IDS } from '@helpers/constants/defaults'

export const getConferences = async () => {
  console.log('called getConferences')

  const response = await appFetch<GetConferencesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
  })
  console.log({ response })

  const processed = processConferences(response)

  return processed
}

export const postConferenceOptions = async (options: PartialButRequired<Conference, 'id'>) => {
  const response = await appFetch<ConferenceResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
    params: {
      method: options.id === TEMP_IDS.conferences ? 'POST' : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    },
  })
  const processedConference = processResponseRow(response)

  return processedConference
}
