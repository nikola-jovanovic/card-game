import { Names, Player } from '../../types'
import players, { actions, State } from '../players'

describe('players reducer', () => {
  const player: Player = { name: Names.Me, score: 0, cards: [{ image: 'image', value: 12, code: 'JH' }], active: true }
  const state: State = { ...players.defaultState, [Names.Me]: player }

  it('set', () => {
    expect(players.reducer(players.defaultState, actions.set(player.cards, Names.Me))).toEqual(state)
  })

  it('addScore', () => {
    expect(players.reducer(state, actions.addScore(10, Names.Me))).toEqual({ ...state, [Names.Me]: { ...player, score: 10 } })
  })

  it('removeCard', () => {
    expect(players.reducer(state, actions.removeCard('JH', Names.Me))).toEqual({ ...state, [Names.Me]: { ...player, cards: [] } })
  })

  it('clear', () => {
    expect(players.reducer(state, actions.clear())).toEqual(players.defaultState)
  })

  it('return default state on uknown action', () => {
    expect(players.reducer(state, { type: 'action', payload: true, meta: Names.Me })).toEqual(state)
  })
})