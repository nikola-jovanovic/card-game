import { createAction, handleActions } from '../../../shared/utils'
import { Action } from '../../../shared/types'

export type State = number

const defaultState: State = 0

const set = createAction<number>('set')

const reducer = handleActions<State>({
  [set.type]: (_, { payload }: Action<number>) => payload,
}, defaultState)

export const actions = { set }

const store = {
  reducer,
  defaultState,
}

export default store
