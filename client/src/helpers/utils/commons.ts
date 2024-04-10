export const objectToQueryString = (obj: Record<string, unknown>) => {
  return Object.entries(obj).map(([key, value]) => `${key}=${value}`)
}

export const getRandomItemFromList = (list: unknown[]) => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}
