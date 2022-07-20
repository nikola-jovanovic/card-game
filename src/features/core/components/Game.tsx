import React from 'react'
import styled from 'styled-components'
import Board from '../../board/Board'
import Selection from '../../selection/Selection'
import useSelected from '../hooks/useSelected'

const PageContainer = styled.div`
  background-color: #04491f;
  height: 100%;
  position: absolute;
  width: 100%;
`

const Game = (): JSX.Element => {
  const { selected, setSelected } = useSelected()
  return (
    <PageContainer>
      {selected > 0 ? (
        <Board selected={selected} />
      ) : (
        <Selection onSelection={setSelected} />
      )}
    </PageContainer>
  )
}

export default Game
