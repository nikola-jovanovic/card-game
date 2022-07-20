import React from 'react'

import { State } from '../state'

type Props = State

const Game = ({ loading, players, pile }: Props): JSX.Element => {
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {Object.keys(players).length ? (
        <p>Board</p>
      ) : (
        <p>Selection</p>
      )}
    </div>
  )
}

export default Game
