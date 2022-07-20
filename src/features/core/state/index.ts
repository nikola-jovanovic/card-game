import loading, {
  State as LoadingState,
} from './loading'
import board, {
  State as BoardState,
} from '../../board/state'
import { combineReducers } from '../utils'

export type State = BoardState & {
  loading: LoadingState
}

export const defaultState: State = {
  ...board.defaultState,
  loading: loading.defaultState,
}

const reducer = combineReducers({ ...board.reducersMap, loading: loading.reducer })

export default reducer
