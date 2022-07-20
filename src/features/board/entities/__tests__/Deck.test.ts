import { success } from 'io-ts'
import { left } from 'fp-ts/lib/Either'

import { getId } from '../Deck'

describe('Deck', () => {
  it('get id', () => {
    expect(getId({ deck_id: "123" })).toEqual(success("123"))

    expect(getId({ deck_id: 123 })).toEqual(left(["Invalid value 123 supplied to : Deck/deck_id: string"]))
    expect(getId({})).toEqual(left(["Invalid value undefined supplied to : Deck/deck_id: string"]))
  })
})
