import React, { Reducer, useReducer } from 'react'
import Dispatch from './features/core/contexts/Dispatch'
import Game from './features/core/components/Game'
import { Action } from './shared/types'
import reducer, { defaultState, State } from './features/core/state'

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<State, Action<unknown>>>(
    reducer,
    defaultState,
  )

  return (
    <Dispatch.Provider value={dispatch}>
      <Game {...state} />
    </Dispatch.Provider>
  );
}

export default App