import { Speech } from '@store/speeches/types'
import { ResponseRow } from '@helpers/types/api'
import { Normalized } from '@helpers/types/commons'
import { GetSpeechesResponse } from './types'

export const processSpeeches = (response: GetSpeechesResponse) => {
  return response.reduce(
    (acc, speech) => {
      const processedSpeech = processSpeechResponseRow(speech)
      acc.byId[processedSpeech.id] = processedSpeech
      acc.allIds.push(processedSpeech.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Speech>
  )
}

export const processSpeechResponseRow = (row: ResponseRow<Speech>): Speech => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, __v, ...rest } = row
  return {
    id: _id,
    ...rest,
  }
}
