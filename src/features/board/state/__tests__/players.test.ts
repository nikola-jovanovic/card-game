import { Position } from '../../types'
import players, { Names } from '../players'

describe('players reducer', () => {
  const player = { name: Names.Me, score: 10, position: Position.Bottom, cards: [{ image: 'image', value: 12, code: 'JH' }] }
  const state = { [Names.Me]: player }

  it('set', () => {
    expect(players.reducer(players.defaultState, players.actions.set(state))).toEqual(state)
  })

  it('addScore', () => {
    expect(players.reducer(state, players.actions.addScore(10, Names.Me))).toEqual({ ...state, [Names.Me]: { ...player, score: 20 } })
  })

  it('removeCard', () => {
    expect(players.reducer(state, players.actions.removeCard('JH', Names.Me))).toEqual({ ...state, [Names.Me]: { ...player, cards: [] } })
  })

  it('clear', () => {
    expect(players.reducer(state, players.actions.clear())).toEqual(players.defaultState)
  })

  it('return default state on uknown action', () => {
    expect(players.reducer(state, { type: 'action', payload: true, meta: Names.Me })).toEqual(state)
  })
})