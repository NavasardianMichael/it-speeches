import { Speech } from '@store/speeches/types'
import { Normalized } from '@helpers/types/commons'
import { processResponseRow } from '@helpers/utils/api'
import { GetSpeechesResponse } from './types'

export const processSpeeches = (response: GetSpeechesResponse) => {
  return response.reduce(
    (acc, speech) => {
      const processedSpeech = processResponseRow(speech) as Speech
      acc.byId[speech.id] = processedSpeech
      acc.allIds.push(processedSpeech.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Speech>
  )
}
