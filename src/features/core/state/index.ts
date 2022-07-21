import board, {
  State as BoardState,
} from '../../board/state'
import { combineReducers } from '../utils'
import selected, {
  State as SelectedState,
} from './selected'

export type State = BoardState & {
  selected: SelectedState
}

export const defaultState: State = {
  ...board.defaultState,
  selected: selected.defaultState,
}

const reducer = combineReducers({ ...board.reducersMap, selected: selected.reducer })

export default reducer
