import reducer, { defaultState } from '..'
import { Position } from '../../../board/types'
import players, { Names } from '../../../board/state/players'
import pile from '../../../board/state/pile'
import loading from '../../../board/state/loading'
import selected from '../selected'

describe('Root reducer', () => {
  describe('players', () => {
    const player = { name: Names.Me, score: 10, position: Position.Bottom, cards: [{ image: 'image', value: 12, code: 'JH' }] }
    const state = { ...defaultState, players: { [Names.Me]: player } }

    it('set', () => {
      expect(reducer(defaultState, players.actions.set(state.players))).toEqual(state)
    })

    it('addScore', () => {
      expect(reducer(state, players.actions.addScore(10, Names.Me))).toEqual({ ...defaultState, players: { [Names.Me]: { ...player, score: 20 } } })
    })

    it('removeCard', () => {
      expect(reducer(state, players.actions.removeCard('JH', Names.Me))).toEqual({ ...defaultState, players: { [Names.Me]: { ...player, cards: [] } } })
    })

    it('clear', () => {
      expect(reducer(state, players.actions.clear())).toEqual(defaultState)
    })

    it('return default state on uknown action', () => {
      expect(reducer(state, { type: 'action', payload: true, meta: Names.Me })).toEqual(state)
    })
  })

  describe('pile', () => {
    const card = { image: 'image', value: 12, code: 'Jh', player: 'me', position: Position.Bottom }
    const state = { ...defaultState, pile: { [Position.Bottom]: card } }

    it('set', () => {
      expect(reducer(defaultState, pile.actions.set(card))).toEqual(state)
    })

    it('clear', () => {
      expect(reducer(state, pile.actions.clear())).toEqual(defaultState)
    })

    it('return default state on uknown action', () => {
      expect(reducer(state, { type: 'action', payload: true, meta: null })).toEqual(state)
    })
  })

  describe('loading', () => {
    it('set', () => {
      expect(reducer(defaultState, loading.actions.set(true))).toEqual({ ...defaultState, loading: true })
    })

    it('return default state on unknown action', () => {
      expect(reducer(defaultState, { type: 'action', payload: true, meta: null })).toEqual(defaultState)
    })
  })

  describe('selected', () => {
    it('set', () => {
      expect(reducer(defaultState, selected.actions.set(3))).toEqual({ ...defaultState, selected: 3 })
    })

    it('return default state on unknown action', () => {
      expect(reducer(defaultState, { type: 'action', payload: true, meta: null })).toEqual(defaultState)
    })
  })
})
