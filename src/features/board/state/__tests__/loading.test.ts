import loading, { actions } from '../loading'

describe('loading reducer', () => {
  it('set', () => {
    expect(loading.reducer(loading.defaultState, actions.set(true))).toEqual(true)
  })

  it('return default state on unknown action', () => {
    expect(loading.reducer(loading.defaultState, { type: 'action', payload: true, meta: null })).toEqual(loading.defaultState)
  })
})