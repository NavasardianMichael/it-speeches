import { appFetch, processResponseRow } from 'helpers/utils/api'
import { Conference } from '@store/conferences/types'
import { PartialButRequired } from '@helpers/types/commons'
import { processConferences } from './processors'
import { ConferenceResponse, GetConferencesResponse } from './types'

export const getConferences = async () => {
  const response = await appFetch<GetConferencesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
  })

  const processed = processConferences(response)

  return processed
}

export const postConferenceOptions = async (
  options: PartialButRequired<Conference, 'id'>,
  isNewConference: boolean
) => {
  const response = await appFetch<ConferenceResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
    params: {
      method: isNewConference ? 'POST' : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    },
  })

  const processedConference = processResponseRow(response)

  return processedConference
}
