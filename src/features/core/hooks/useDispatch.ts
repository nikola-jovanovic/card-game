import { useContext } from 'react'
import DispatchContext from '../contexts/Dispatch'

const useDispatch = () => useContext(DispatchContext)

export default useDispatch