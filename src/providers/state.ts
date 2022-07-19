import { createContext } from 'react'
import { defaultState, State } from '../reducers'

export const StoreContext = createContext<State>(defaultState)

export default StoreContext
