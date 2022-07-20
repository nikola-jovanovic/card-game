import players, {
  State as PlayersState,
} from './players'
import pile, {
  State as PileState,
} from './pile'

export type State = {
  players: PlayersState
  pile: PileState
}

export const defaultState: State = {
  players: players.defaultState,
  pile: pile.defaultState,
}

const reducersMap = { players: players.reducer, pile: pile.reducer }

const state = { reducersMap, defaultState }

export default state
