import { Conference } from '@store/conferences/types'
import { Normalized } from '@helpers/types/commons'
import { processResponseRow } from '@helpers/utils/api'
import { GetConferencesResponse } from './types'

export const processConferences = (response: GetConferencesResponse) => {
  return response.reduce(
    (acc, conference) => {
      console.log({conference});
      
      const processedConference = processResponseRow(conference) as Conference
      acc.byId[processedConference.id] = processedConference
      acc.allIds.push(processedConference.id)
      return acc
    },
    {
      byId: {},
      allIds: [],
    } as Normalized<Conference>
  )
}
