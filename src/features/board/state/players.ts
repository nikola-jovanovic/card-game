import { Action } from '../../../shared/types'
import { createAction, handleActions } from '../../../shared/utils'
import { Card, Names, Player, Score } from '../types'

export type State = {
  [name in keyof typeof Names]: Player
}

const stateFactory = (name: Names) => ({
  name,
  score: 0,
  cards: [],
  active: false
})

const defaultState: State = {
  [Names.Me]: stateFactory(Names.Me),
  [Names.Milisav]: stateFactory(Names.Milisav),
  [Names.Mileva]: stateFactory(Names.Mileva),
  [Names.Djura]: stateFactory(Names.Djura),
}

const set = createAction<Card[], Names>('set')
const addScore = createAction<Score, Names>('addScore')
const removeCard = createAction<string, Names>('removeCard')
const clear = createAction<void>('clear')

const reducer = handleActions<State>({
  [set.type]: (state, { payload: cards, meta }: Action<Card[], Names>) => ({
    ...state,
    [meta]: {
      ...state[meta],
      cards,
      active: true
    }
  }),
  [addScore.type]: (state, { payload: score, meta }: Action<Score, Names>) => ({
    ...state,
    [meta]: {
      ...state[meta],
      score: (state[meta]?.score || 0) + score
    }
  }),
  [removeCard.type]: (state, { payload: code, meta }: Action<string, Names>) => ({
    ...state,
    [meta]: {
      ...state[meta],
      cards: state[meta]?.cards.filter((card) => card.code !== code)
    }
  }),
  [clear.type]: () => defaultState,
}, defaultState)

export const actions = {
  set,
  addScore,
  removeCard,
  clear
}

const store = {
  reducer,
  defaultState,
}

export default store