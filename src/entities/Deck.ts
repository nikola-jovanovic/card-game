import { string, type, TypeOf } from 'io-ts'
import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { decodeErrors } from '../lib/utils'

const Deck = type(
  {
    deck_id: string,
  },
  'Deck',
)

export const getId = (deck: unknown) =>
  pipe(
    deck,
    Deck.decode,
    mapLeft(decodeErrors),
    map(
      ({ deck_id }: TypeOf<typeof Deck>) => deck_id
    ),
  )
