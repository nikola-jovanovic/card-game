import { map, mapLeft } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'
import { string, type, TypeOf } from 'io-ts'

import { decodeErrors } from '../utils'

const Deck = type(
  {
    deck_id: string,
  },
  'Deck',
)

export const getId = flow(
  Deck.decode,
  mapLeft(decodeErrors),
  map(
    ({ deck_id }: TypeOf<typeof Deck>) => deck_id
  ),
)