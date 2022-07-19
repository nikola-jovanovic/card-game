import { Errors } from "io-ts"
import { Action } from "../types"

interface IActionCreator<P, M> {
  type: string
  (payload: P, meta: M): Action<P, M>
}

interface Reducer<S, P, M> {
  (state: S, action: Action<P, M>): S
}

export function decodeErrors(e: Errors): string[] {
  return e.map(e => {
    return `Invalid value ${e.value} supplied to ${e.context.map(({ key, type }) => `${key}: ${type.name}`).join('/')}`
  })
}

const id = () => Math.random().toString(32).slice(-8)

export function createAction<P, M = void>(type: string): IActionCreator<P, M> {
  const uniqueType = `[${type}] ${id()}`

  return Object.assign((payload: P, meta: M) => ({ type: uniqueType, payload, meta }), {
    type: uniqueType,
  })
}


export const handleActions = <S>(actions: {
  [index: string]: Reducer<S, any, any>;
}) => (state: S, action: Action<any, any>): S =>
    Object.entries(actions).reduce(
      (state, [type, reducer]) =>
        type === action.type ? reducer(state, action) : state,
      state,
    )

export const combineReducers = (slices: any) => (state: any, action: any) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state,
  )