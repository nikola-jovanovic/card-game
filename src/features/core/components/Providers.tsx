import React, { Reducer, useReducer } from 'react'
import { Action } from '../../../shared/types'
import DispatchContext from '../contexts/Dispatch'
import StateContext from '../contexts/State'
import reducer, { defaultState, State } from '../state'

export const Providers = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [state, dispatch] = useReducer<Reducer<State, Action<unknown>>>(
    reducer,
    defaultState,
  )

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default Providers