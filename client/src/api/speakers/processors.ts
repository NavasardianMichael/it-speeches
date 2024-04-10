import { Speaker } from '@store/speakers/types'
import { Normalized } from '@helpers/types/commons'
import { processResponseRow } from '@helpers/utils/api'
import { GetSpeakersResponse } from './types'

export const processSpeakers = (response: GetSpeakersResponse) => {
  return response.reduce(
    (acc, speaker) => {
      const processedSpeaker = processResponseRow(speaker) as Speaker
      acc.byId[speaker.id] = processedSpeaker
      acc.allIds.push(processedSpeaker.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Speaker>
  )
}
