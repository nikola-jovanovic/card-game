import { TypeOf } from 'io-ts'
import { Card as CardC } from './entities/Card'

export type Card = TypeOf<typeof CardC>

export enum Position {
  Bottom,
  Left,
  Top,
  Right,
}