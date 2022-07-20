import players, {
  State as PlayersState,
} from './players'
import pile, {
  State as PileState,
} from './pile'
import loading, {
  State as LoadingState,
} from './loading'

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

const reducersMap = { players: players.reducer, pile: pile.reducer, loading: loading.reducer }

const state = { reducersMap, defaultState }

export default state
