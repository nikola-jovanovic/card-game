import { createContext, Dispatch } from 'react'

type DispatchState = {
  dispatch: Dispatch<any>
}

const defaultState: DispatchState = { dispatch: () => { } }

const DispatchContext = createContext<DispatchState>(defaultState)

export default DispatchContext
