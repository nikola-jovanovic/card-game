import { chain } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { exact,string, success, Type, type } from 'io-ts'

const Cards: { [index: string]: number } = {
  'ACE': 1,
  'JACK': 12,
  'QUEEN': 13,
  'KING': 14
}

const value = new Type<number, string, unknown>(
  'cardValue',
  (u): u is number => typeof u === 'number',
  (u, c) =>
    pipe(
      string.validate(u, c),
      chain((s: string) => {
        const d = parseInt(s)

        return success(isNaN(d) ? Cards[s] : d)
      }),
    ),
  (a) => a.toString(),
)

export const Card = exact(
  type(
    {
      code: string,
      image: string,
      value,
    },
    'Card',
  ),
)
