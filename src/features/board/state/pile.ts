import { createAction, handleActions } from '../../../shared/utils'
import { Card, Position } from '../types'

type PileCard = Card & {
  player: string
  position: Position
}

export type State = {
  [key in Position]?: PileCard
}

const defaultState: State = {}

const set = createAction<PileCard>('set')
const clear = createAction<void>('clear')

const reducer = handleActions<State>({
  [set.type]: (state, { payload }) => ({
    ...state,
    [payload.position]: payload,
  }),
  [clear.type]: () => defaultState,
})

const store = {
  reducer,
  defaultState,
  actions: { set, clear }
}


export default store
