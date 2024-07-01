import { Speaker } from '@store/speakers/types'
import { ResponseRow } from '@helpers/types/api'
import { Normalized } from '@helpers/types/commons'
import { GetSpeakersResponse } from './types'

export const processSpeakers = (response: GetSpeakersResponse) => {
  return response.reduce(
    (acc, speaker) => {
      const processedSpeaker = processSpeakerResponseRow(speaker) as Speaker
      acc.byId[processedSpeaker.id] = processedSpeaker
      acc.allIds.push(processedSpeaker.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Speaker>
  )
}

export const processSpeakerResponseRow = (row: ResponseRow<Speaker>): Speaker => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, __v, ...rest } = row
  return {
    id: _id,
    ...rest,
  }
}
