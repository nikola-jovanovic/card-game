import { TypeOf } from 'io-ts'

import { Card as CardC } from './entities/Card'

export type Card = TypeOf<typeof CardC>
export type Score = number

export enum Names {
  Me = 'Me',
  Milisav = 'Milisav',
  Mileva = 'Mileva',
  Djura = 'Djura',
}

export interface Player {
  name: Names
  score: Score
  cards: Card[]
  active: boolean
}

export type Pile = {
  [key in Names]?: Card
}