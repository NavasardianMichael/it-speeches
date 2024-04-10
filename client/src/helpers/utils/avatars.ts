import {
  AVATAR_BACKGROUND_COLORS,
  AVATAR_BASE_URL,
  AVATAR_COLLECTION_BY_SLICE,
  AVATAR_SEEDS_BY_COLLECTION,
  AVATAR_STATIC_OPTIONS,
} from '@helpers/constants/avatars'
import { StateSliceName } from '@helpers/types/store'
import { getRandomItemFromList, objectToQueryString } from './commons'

export const generateRandomAvatarForEntity = (entity: StateSliceName) => {
  const collection = AVATAR_COLLECTION_BY_SLICE[entity]
  return decodeURI(
    `${AVATAR_BASE_URL}/${collection}/svg?
        seed=${getRandomItemFromList(AVATAR_SEEDS_BY_COLLECTION[collection])}&
        backgroundColor=${Object.values(AVATAR_BACKGROUND_COLORS)}&
        ${objectToQueryString(AVATAR_STATIC_OPTIONS)}`
  ).replace(/\s+/g, '')
}
