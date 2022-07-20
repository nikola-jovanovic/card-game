import { useCallback, useContext } from 'react'
import useDispatch from '../core/hooks/useDispatch'
import StateContext from '../core/contexts/State'
import useSelected from '../core/hooks/useSelected'
import { actions as pileActions } from './state/pile'
import { actions as playersActions } from './state/players'
import { actions as loadingActions } from './state/loading'
import { Card, Names } from './types'
import { getData, getCards } from './service'

const playerNames = [Names.Me, Names.Milisav, Names.Mileva, Names.Djura]

const useBoard = () => {
  const { loading, players, pile } = useContext(StateContext)
  const { setSelected } = useSelected()
  const dispatch = useDispatch()
  const setLoading = useCallback((payload: boolean) => dispatch(loadingActions.set(payload)), [dispatch])

  const activePlayers = Object.values(players).filter(player => player.active)

  const handleError = (e: any) => {
    console.error(e)
    setLoading(false)
    setSelected(0)
  }

  const init = (players: number) => {
    setLoading(true)

    getData(players)
      .then((cardsMatrix: Card[][]) => {
        cardsMatrix.map((cards, i) =>
          dispatch(
            playersActions.set(cards, playerNames[i])
          )
        )
        setLoading(false)
      })
      .catch(handleError)

  }

  const playCard = (card: Card) => {
    getCards(
      card,
      activePlayers.filter(player => player.name !== Names.Me)
    ).then(({ pile, winner, score }) => {
      Object.entries(pile).map(([name, card]) => dispatch(playersActions.removeCard(card.code, name as Names)))
      dispatch(pileActions.set(pile))

      setTimeout(() => {
        dispatch(pileActions.clear())
        dispatch(playersActions.addScore(score, winner))
      }, 2000)
    })
  }

  const highestScore = Math.max(...activePlayers.map((_: any) => _.score))
  const finalScore = players.Me.active && players.Me.cards.length === 0 &&
    Object.values(pile).length === 0 && {
    value: highestScore,
    winners: activePlayers.filter((player: any) => player.score === highestScore),
  }

  return {
    init, playCard, loading, players, pile, finalScore, reset: () => {
      setSelected(0)
      dispatch(playersActions.clear())
    }
  }
}

export default useBoard