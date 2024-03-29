import { Action } from '../../../shared/types'
import { createAction, handleActions } from '../../../shared/utils'

export type State = boolean

const defaultState: State = false

const set = createAction<boolean>('set')

const reducer = handleActions<State>({
  [set.type]: (_, { payload }: Action<boolean>) => payload,
}, defaultState)

export const actions = { set }

const store = {
  reducer,
  defaultState,
}

export default store
