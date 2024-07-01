import { STATE_SLICE_NAMES } from './store'

// https://www.dicebear.com/styles/croodles/
export const AVATAR_COLLECTIONS = {
  icons: 'icons',
  shapes: 'shapes',
  croodles: 'croodles',
} as const

export const AVATAR_COLLECTION_BY_SLICE = {
  [STATE_SLICE_NAMES.conferences]: AVATAR_COLLECTIONS.icons,
  [STATE_SLICE_NAMES.speeches]: AVATAR_COLLECTIONS.shapes,
  [STATE_SLICE_NAMES.speakers]: AVATAR_COLLECTIONS.croodles,
} as const

export const AVATAR_SEEDS_BY_COLLECTION = {
  [AVATAR_COLLECTIONS.icons]: [
    'Bob',
    'Abby',
    'Precious',
    'Simon',
    'Sammy',
    'Lilly',
    'Princess',
    'Snickers',
    'Lucky',
    'Jasmine',
    'Tigger',
    'Trouble',
    'Shadow',
    'Oreo',
    'Pumpkin',
    'Luna',
    'Sophie',
    'Leo',
    'Miss kitty',
    'Whiskers',
  ],
  [AVATAR_COLLECTIONS.shapes]: [
    'Angel',
    'Spooky',
    'Bubba',
    'Jack',
    'Snuggles',
    'Precious',
    'Midnight',
    'Leo',
    'Casper',
    'Princess',
    'Cookie',
    'Whiskers',
    'Tiger',
    'Samantha',
    'Gracie',
    'Loki',
    'Sheba',
    'Baby',
    'Milo',
    'Callie',
  ],
  [AVATAR_COLLECTIONS.croodles]: [
    'Oliver',
    'Charlie',
    'Maggie',
    'Miss kitty',
    'Daisy',
    'Lily',
    'Samantha',
    'Boo',
    'Peanut',
    'Mittens',
    'Cuddles',
    'Zoey',
    'Abby',
    'Snowball',
    'Annie',
    'Ginger',
    'Boots',
    'Lola',
    'Mimi',
    'Rascal',
  ],
}

export const AVATAR_BACKGROUND_COLORS = ['ffdfbf', 'b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc']

export const AVATAR_BASE_URL = 'https://api.dicebear.com/8.x'

export const AVATAR_STATIC_OPTIONS = {
  randomizeIds: false,
}
