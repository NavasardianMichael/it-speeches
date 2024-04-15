import { Conference } from '@store/conferences/types'
import { Normalized } from '@helpers/types/commons'
import { GetConferencesResponse } from './types'
import { ResponseRow } from '@helpers/types/api'

export const processConferences = (response: GetConferencesResponse) => {
  return response.reduce(
    (acc, conference) => {
      const processedConference = processConferenceResponseRow(conference) as Conference
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

export const processConferenceResponseRow = (row: ResponseRow<Conference>): Conference => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, __v, ...rest } = row
  return {
    id: _id,
    ...rest,
  }
}