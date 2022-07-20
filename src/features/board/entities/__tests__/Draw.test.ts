import { success } from 'io-ts'
import { left } from 'fp-ts/lib/Either'

import { getCards } from '../Draw'

describe('Draw', () => {
  it('get cards', () => {
    expect(
      getCards(
        { cards: [{ code: 'JH', image: 'img url', value: 'JACK' }] }
      )).toEqual(success([
        {
          "code": "JH",
          "image": "img url",
          "value": 12,
        }
      ])
      )

    expect(
      getCards(
        { cards: [{ code: 'JH' }] }
      )
    ).toEqual(
      left(["Invalid value undefined supplied to : {| cards: Array<{| code: string, image: string, value: cardValue |}> |}/cards: Array<{| code: string, image: string, value: cardValue |}>/0: {| code: string, image: string, value: cardValue |}/image: string",
        "Invalid value undefined supplied to : {| cards: Array<{| code: string, image: string, value: cardValue |}> |}/cards: Array<{| code: string, image: string, value: cardValue |}>/0: {| code: string, image: string, value: cardValue |}/value: cardValue"])
    )
    expect(
      getCards({ cards: 123 })
    ).toEqual(
      left(["Invalid value 123 supplied to : {| cards: Array<{| code: string, image: string, value: cardValue |}> |}/cards: Array<{| code: string, image: string, value: cardValue |}>"])
    )
  })
})
