import { ResponseRow } from '@helpers/types/api'
import { objectToQueryString } from './commons'

type TFetchArgs = {
  url: string
  queryParams?: Record<string, string>
  params?: RequestInit
}

export const appFetch = async <ExpectedResponse>({
  url,
  queryParams,
  params,
}: TFetchArgs): Promise<ExpectedResponse> => {
  const combinedQueryParams = queryParams ? objectToQueryString(queryParams) : ''

  const response = await fetch(url + combinedQueryParams, params)

  const data: ExpectedResponse = await response.json()
  return data
}

export const processResponseRow = (row: ResponseRow) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, __v, ...rest } = row
  return {
    id: _id,
    ...rest,
  }
}
