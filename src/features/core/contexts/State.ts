import { createContext } from 'react'

import { defaultState,State } from '../state'

const StateContext = createContext<State>(defaultState)

export default StateContext
