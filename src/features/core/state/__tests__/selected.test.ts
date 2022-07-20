import selected from '../selected'

describe('selected reducer', () => {
  it('set', () => {
    expect(selected.reducer(selected.defaultState, selected.actions.set(5))).toEqual(5)
  })

  it('return default state on unknown action', () => {
    expect(selected.reducer(selected.defaultState, { type: 'action', payload: true, meta: null })).toEqual(selected.defaultState)
  })
})