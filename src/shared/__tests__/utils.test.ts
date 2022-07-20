import { createAction, handleActions } from '../utils'

describe('utils', () => {
  describe('createAction', () => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.5345)
    })

    afterEach(() => {
      jest.spyOn(global.Math, 'random').mockRestore()
    })

    it('work', () => {

      expect(createAction<number, string>('increment')(4, 'arg')).toEqual({
        meta: 'arg',
        payload: 4,
        type: '[increment] frstm8mg',
      })
    })
  })

  describe('handleActions', () => {
    it('work', () => {
      const reducer = handleActions<number>({
        increment: (state, { payload }) => state + payload
      }, 0)

      expect(reducer(5, { type: 'increment', payload: 5, meta: undefined })).toEqual(10)
      expect(reducer(5, { type: 'decrement', payload: 5, meta: undefined })).toEqual(5)
    })
  })
})