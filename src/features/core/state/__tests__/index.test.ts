import { actions as loadingActions } from '../../../board/state/loading'
import pile, { actions as pileActions } from '../../../board/state/pile'
import players, { actions as playersActions } from '../../../board/state/players'
import { Card, Names, Player } from '../../../board/types'
import reducer, { defaultState, State } from '..'
import { actions as selectedActions } from '../selected'

describe('Root reducer', () => {
  describe('players', () => {
    const player: Player = { name: Names.Me, score: 0, active: true, cards: [{ image: 'image', value: 12, code: 'JH' }] }
    const state: State = { ...defaultState, players: { ...players.defaultState, [Names.Me]: player } }

    it('set', () => {
      expect(reducer(defaultState, playersActions.set(player.cards, Names.Me))).toEqual(state)
    })

    it('addScore', () => {
      expect(reducer(state, playersActions.addScore(10, Names.Me))).toEqual({ ...defaultState, players: { ...players.defaultState, [Names.Me]: { ...player, score: 10 } } })
    })

    it('removeCard', () => {
      expect(reducer(state, playersActions.removeCard('JH', Names.Me))).toEqual({ ...defaultState, players: { ...players.defaultState, [Names.Me]: { ...player, cards: [] } } })
    })

    it('clear', () => {
      expect(reducer(state, playersActions.clear())).toEqual(defaultState)
    })

    it('return default state on uknown action', () => {
      expect(reducer(state, { type: 'action', payload: true, meta: Names.Me })).toEqual(state)
    })
  })

  describe('pile', () => {
    const card: Card = { image: 'image', value: 12, code: 'Jh' }
    const state = { ...defaultState, pile: { ...pile.defaultState, [Names.Me]: card } }

    it('set', () => {
      expect(reducer(defaultState, pileActions.set(state.pile))).toEqual(state)
    })

    it('clear', () => {
      expect(reducer(state, pileActions.clear())).toEqual(defaultState)
    })

    it('return default state on uknown action', () => {
      expect(reducer(state, { type: 'action', payload: true, meta: null })).toEqual(state)
    })
  })

  describe('loading', () => {
    it('set', () => {
      expect(reducer(defaultState, loadingActions.set(true))).toEqual({ ...defaultState, loading: true })
    })

    it('return default state on unknown action', () => {
      expect(reducer(defaultState, { type: 'action', payload: true, meta: null })).toEqual(defaultState)
    })
  })

  describe('selected', () => {
    it('set', () => {
      expect(reducer(defaultState, selectedActions.set(3))).toEqual({ ...defaultState, selected: 3 })
    })

    it('return default state on unknown action', () => {
      expect(reducer(defaultState, { type: 'action', payload: true, meta: null })).toEqual(defaultState)
    })
  })
})
