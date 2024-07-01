export type ResponseRowBase = { _id: string; __v: number }

export type ResponseRow<T> = Omit<T, 'id'> & ResponseRowBase

export type ResponseForEntity<T> = Exclude<T, 'id'> & ResponseRowBase
