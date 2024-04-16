import { PartialButRequired } from '@helpers/types/commons'
import { Speech } from '@store/speeches/types'
import { appFetch } from 'helpers/utils/api'
import { processSpeechResponseRow, processSpeeches } from './processors'
import { GetSpeechesResponse, SpeechResponse } from './types'

export const getSpeeches = async () => {
  const response = await appFetch<GetSpeechesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speeches`,
  })

  const processed = processSpeeches(response)

  return processed
}

export const postSpeechOptions = async (
  options: PartialButRequired<Speech, 'id'>,
  isNewSpeech: boolean
) => {  
  const response = await appFetch<SpeechResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}speeches`,
    params: {
      method: isNewSpeech ? 'POST' : 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    },
  })

  const processedSpeech = processSpeechResponseRow(response)

  return processedSpeech
}