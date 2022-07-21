import { map, mapLeft } from 'fp-ts/Either'
import { flow } from 'fp-ts/function'
import { array, exact, type, TypeOf } from 'io-ts'

import { decodeErrors } from '../utils'
import { Card } from './Card'

const Draw = exact(
  type(
    {
      cards: array(Card),
    },
    'Draw',
  ),
)

export const getCards = flow(
  Draw.decode,
  mapLeft(decodeErrors),
  map(({ cards }: TypeOf<typeof Draw>) => cards),
)
