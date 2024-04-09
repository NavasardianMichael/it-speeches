import { ResponseRow } from '@helpers/types/api'

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
  console.log({ params })
  const combinedQueryParams = queryParams ? Object.entries(queryParams).map(([key, value]) => `${key}=${value}`) : ''

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
