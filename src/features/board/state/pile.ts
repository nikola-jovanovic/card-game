import { Action } from '../../../shared/types'
import { createAction, handleActions } from '../../../shared/utils'
import { Pile } from '../types'

export type State = Pile

const defaultState: State = {}

const set = createAction<State>('set')
const clear = createAction<void>('clear')

const reducer = handleActions<State>({
  [set.type]: (_, { payload }: Action<State>) => payload,
  [clear.type]: () => defaultState,
}, defaultState)

export const actions = {
  set,
  clear
}

const store = {
  reducer,
  defaultState,
}

export default store
