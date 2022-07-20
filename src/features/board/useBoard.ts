import { Position, Card } from './types'
import useDispatch from '../core/hooks/useDispatch'
import loadingState from './state/loading'
import playersState, { Names } from './state/players'
import { useCallback, useContext } from 'react'
import StateContext from '../core/contexts/State'
import useSelected from '../core/hooks/useSelected'
import { getData } from './service'

const playerNames = [Names.Me, Names.Milisav, Names.Mileva, Names.Djura]
const positionsByPlayers = [
  [],
  [],
  [Position.Bottom, Position.Top],
  [Position.Bottom, Position.Left, Position.Top],
  [Position.Bottom, Position.Left, Position.Top, Position.Right],
]

const useBoard = () => {
  const { loading, players, pile } = useContext(StateContext)
  const { setSelected } = useSelected()
  const dispatch = useDispatch()
  const setLoading = useCallback((payload: boolean) => dispatch(loadingState.actions.set(payload)), [dispatch])

  const handleError = (e: any) => {
    console.error(e)
    setLoading(false)
    setSelected(0)
  }

  const init = (players: number) => {
    setLoading(true)

    getData(players)
      .then((cardsMatrix: Card[][]) => {
        dispatch(
          playersState.actions.set(
            cardsMatrix.reduce(
              (playersMap, cards, i) => ({
                ...playersMap,
                [playerNames[i]]: {
                  cards,
                  name: playerNames[i],
                  position: positionsByPlayers[players][i],
                  score: 0,
                }
              })
              , {}
            )
          )
        )
        setLoading(false)
      })
      .catch(handleError)

  }

  return { init, loading, players, pile }
}

export default useBoard