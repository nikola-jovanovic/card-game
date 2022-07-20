
import { Reducer } from 'react'
import { Action } from './types'

interface IActionCreator<P, M> {
  type: string
  (payload: P, meta: M): Action<P, M>
}

const id = () => Math.random().toString(32).slice(-8)

export function createAction<P, M = void>(type: string): IActionCreator<P, M> {
  const uniqueType = `[${type}] ${id()}`

  const action = (payload: P, meta: M) => ({ type: uniqueType, payload, meta })
  return Object.assign(action, {
    type: uniqueType,
  })
}

export const handleActions = <S>(actions: {
  [index: string]: Reducer<S, Action<any, any>>;
}, defaultState: S) => (state: S = defaultState, action: Action<any, any>): S =>
    Object.entries(actions).reduce(
      (state, [type, reducer]) =>
        type === action.type ? reducer(state, action) : state,
      state,
    )
