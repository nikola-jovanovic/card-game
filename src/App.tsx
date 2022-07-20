import React, { Reducer, useReducer } from 'react'
import DispatchContext from './features/core/contexts/Dispatch'
import StateContext from './features/core/contexts/State'
import Game from './features/core/components/Game'
import { Action } from './shared/types'
import reducer, { defaultState, State } from './features/core/state'
import GlobalCss from './global.css'

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<State, Action<unknown>>>(
    reducer,
    defaultState,
  )

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <GlobalCss />
        <Game />
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default App