import { Conference } from '@store/conference/types'
import { Normalized } from '@helpers/types/commons'
import { processResponseRow } from '@helpers/utils/api'
import { GetConferencesResponse } from './types'

export const processConferences = (response: GetConferencesResponse) => {
  return response.reduce(
    (acc, conference) => {
      const processedConference = processResponseRow(conference) as Conference
      acc.byId[conference.id] = processedConference
      acc.allIds.push(processedConference.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Conference>
  )
}
