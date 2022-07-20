import selected, {
  State as SelectedState,
} from './selected'
import board, {
  State as BoardState,
} from '../../board/state'
import { combineReducers } from '../utils'

export type State = BoardState & {
  selected: SelectedState
}

export const defaultState: State = {
  ...board.defaultState,
  selected: selected.defaultState,
}

const reducer = combineReducers({ ...board.reducersMap, selected: selected.reducer })

export default reducer
