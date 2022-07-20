import { createContext, Dispatch } from 'react'

type DispatchState = Dispatch<any>

const defaultState: DispatchState = () => { }

const DispatchContext = createContext<DispatchState>(defaultState)

export default DispatchContext
