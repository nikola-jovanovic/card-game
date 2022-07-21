import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { array, exact,type, TypeOf } from 'io-ts'

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

export const getCards = (draw: unknown) =>
  pipe(
    draw,
    Draw.decode,
    mapLeft(decodeErrors),
    map(({ cards }: TypeOf<typeof Draw>) => cards),
  )
