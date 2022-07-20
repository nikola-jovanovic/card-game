import { createAction, handleActions } from '../../../shared/utils'
import { Card, Position } from '../types'
import { Action } from '../../../shared/types'

export enum Names {
  Me = 'Me',
  Milisav = 'Milisav',
  Mileva = 'Mileva',
  Djura = 'Djura',
}

type Score = number

interface Player {
  name: Names
  score: Score
  cards: Card[]
  position: Position
}

export type State = {
  [name in keyof typeof Names]?: Player
}

const defaultState: State = {}

const set = createAction<State>("set")
const addScore = createAction<Score, Names>('addScore')
const removeCard = createAction<string, Names>('removeCard')
const clear = createAction<void>('clear')

const reducer = handleActions<State>({
  [set.type]: (_, { payload }) => payload,
  [addScore.type]: (state, { payload, meta }: Action<Score, Names>) => ({
    ...state,
    [meta]: {
      ...state[meta],
      score: (state[meta]?.score || 0) + payload
    }
  }),
  [removeCard.type]: (state, { payload, meta }: Action<string, Names>) => ({
    ...state,
    [meta]: {
      ...state[meta],
      cards: state[meta]?.cards.filter((card) => card.code !== payload)
    }
  }),
  [clear.type]: () => defaultState,
})

const store = {
  reducer,
  defaultState,
  actions: { set, addScore, removeCard, clear }
}


export default store