import { Position } from '../../types'
import pile from '../pile'

describe('pile reducer', () => {
  const card = { image: 'image', value: 12, code: 'Jh', player: 'me', position: Position.Bottom }
  const state = { [Position.Bottom]: card }

  it('set', () => {
    expect(pile.reducer(pile.defaultState, pile.actions.set(card))).toEqual(state)
  })

  it('clear', () => {
    expect(pile.reducer(state, pile.actions.clear())).toEqual(pile.defaultState)
  })

  it('return default state on uknown action', () => {
    expect(pile.reducer(state, { type: 'action', payload: true, meta: null })).toEqual(state)
  })
})
