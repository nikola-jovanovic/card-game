import { TypeOf } from 'io-ts'
import { Card as CardC } from './entities/Card'

export type Action<P, M = void> = {
  type: string
  payload: P
  meta: M
}

export type Card = TypeOf<typeof CardC>
