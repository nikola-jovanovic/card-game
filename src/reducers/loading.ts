import { createAction, handleActions } from '../lib/utils'
import { Action } from '../types'

export type State = boolean

const defaultState: State = false

const set = createAction<boolean>('set')

const reducer = handleActions<State>({
  [set.type]: (_, { payload }: Action<boolean>) => payload,
})

const store = {
  reducer,
  defaultState,
  actions: { set }
}

export default store
