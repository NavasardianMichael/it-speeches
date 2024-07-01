import { appFetch } from 'helpers/utils/api'
import { Speaker } from '@store/speakers/types'
import { PartialButRequired } from '@helpers/types/commons'
import { processSpeakerResponseRow, processSpeakers } from './processors'
import { GetSpeakersResponse, SpeakerResponse } from './types'

export const getSpeakers = async () => {
  const response = await appFetch<GetSpeakersResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speakers`,
  })

  const processed = processSpeakers(response)

  return processed
}

export const postSpeakerOptions = async (options: PartialButRequired<Speaker, 'id'>, isNewSpeaker: boolean) => {
  const response = await appFetch<SpeakerResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speakers`,
    params: {
      method: isNewSpeaker ? 'POST' : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    },
  })

  const processedSpeaker = processSpeakerResponseRow(response)

  return processedSpeaker
}
