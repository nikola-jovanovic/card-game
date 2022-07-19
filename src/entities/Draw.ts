import { type, TypeOf, array, exact } from 'io-ts'
import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { Card } from './Card'
import { decodeErrors } from '../lib/utils'

const Draw = exact(
  type(
    {
      cards: array(Card),
    },
    'Draw',
  ),
)

export const getCards = (draw: unknown) =>
  pipe(
    draw,
    Draw.decode,
    mapLeft(decodeErrors),
    map(({ cards }: TypeOf<typeof Draw>) => cards),
  )
