import { createContext } from 'react'
import { State, defaultState } from '../state'

const StateContext = createContext<State>(defaultState)

export default StateContext
