import loading, {
  State as LoadingState,
} from './loading'
import players, {
  State as PlayersState,
} from './players'
import pile, {
  State as PileState,
} from './pile'
import { combineReducers } from '../lib/utils'

export type State = {
  players: PlayersState
  pile: PileState
  loading: LoadingState
}

export const defaultState: State = {
  players: players.defaultState,
  pile: pile.defaultState,
  loading: loading.defaultState,
}

const reducer = combineReducers({ players: players.reducer, pile: pile.reducer, loading: loading.reducer })

export default reducer
