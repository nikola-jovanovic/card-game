import { Card, Names, Pile } from '../../types'
import pile, { actions } from '../pile'

describe('pile reducer', () => {
  const card: Card = { image: 'image', value: 12, code: 'Jh' }
  const state: Pile = { [Names.Me]: card }

  it('set', () => {
    expect(pile.reducer(pile.defaultState, actions.set(state))).toEqual(state)
  })

  it('clear', () => {
    expect(pile.reducer(state, actions.clear())).toEqual(pile.defaultState)
  })

  it('return default state on uknown action', () => {
    expect(pile.reducer(state, { type: 'action', payload: true, meta: null })).toEqual(state)
  })
})
