import { appFetch } from 'helpers/utils/api'
import { processConferences } from './processors'
import { GetConferencesResponse } from './types'

export const getConferences = async () => {
  console.log('called getConferences')
  console.log({ process: 1 })

  const response = await appFetch<GetConferencesResponse>({
    url: `${import.meta.env.VITE_APP_BASE_URL}conferences`,
  })
  console.log({ response })

  const processed = processConferences(response)

  return processed
}
