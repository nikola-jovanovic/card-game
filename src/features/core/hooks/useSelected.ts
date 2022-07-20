import { useContext } from 'react'
import DispatchContext from '../contexts/Dispatch'
import StateContext from '../contexts/State'
import selectedState from '../state/selected'

const useSelected = () => {
  const { selected } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  return { selected, setSelected: (count: number) => dispatch(selectedState.actions.set(count)) }
}

export default useSelected