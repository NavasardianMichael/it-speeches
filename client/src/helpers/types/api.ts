export type ResponseRowBase = { _id: string; __v: number }

export type ResponseRow = Record<string, unknown> & ResponseRowBase

export type ResponseForEntity<T> = Exclude<T, 'id'> & ResponseRowBase
