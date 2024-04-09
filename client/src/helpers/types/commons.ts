export type Normalized<T extends { id: string }> = {
  byId: Record<T['id'], T>
  allIds: T['id'][]
}

export type PartialButRequired<T, K extends keyof T> = Pick<T, K> & Partial<T>
