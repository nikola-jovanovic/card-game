import React, { useEffect } from 'react'
import styled from 'styled-components'

import Button from '../../shared/components/Button'
import Centered from '../../shared/components/Centered'
import FlexContainer from '../../shared/components/FlexContainer'
import Title from '../../shared/components/Title'
import Pile from './components/Pile'
import Player from './components/Player'
import useBoard from './useBoard'

type Props = { selected: number }

const Wrapper = styled(FlexContainer)`
  flex-direction: column;
  height: 100%;
  padding: 20px;
`

const Flex = styled.div`
  flex: 1;
`

const Middle = styled(FlexContainer)`
  align-items: center;
`

const CenteredItem = styled.div`
  display: flex;
  justify-content: center;
`

const Board = ({ selected }: Props): JSX.Element => {
  const { init, loading, players, pile, playCard, finalScore, reset } = useBoard()

  useEffect(() => {
    init(selected)
  }, [])

  if (loading) {
    return (
      <Centered>
        <Title>Loading...</Title>
      </Centered>
    )
  }

  const SideContainer = selected === 3 ? Flex : 'div'

  return (
    <Wrapper>
      <CenteredItem>
        {players.Milisav.active && <Player {...players.Milisav} variant="cpu" />}
      </CenteredItem>
      <Middle>
        <SideContainer>{players.Mileva.active && <Player {...players.Mileva} variant="cpu" />}</SideContainer>
        <Flex>
          {Object.values(pile).length > 0 && <Pile pile={pile} />}
          {finalScore && (
            <Centered>
              <div>
                <Title>
                  Winner is{' '}
                  {finalScore.winners.map((player) => player.name).join(', ')} with
                  score {finalScore.value}
                </Title>
                <Button onClick={reset}>Play again</Button>
              </div>
            </Centered>
          )}
        </Flex>
        <SideContainer>{players.Djura.active && <Player {...players.Djura} variant="cpu" />}</SideContainer>
      </Middle>
      <CenteredItem>
        {players.Me.active && <Player
          {...players.Me}
          variant="user"
          onPlay={Object.values(pile).length === 0 ? playCard : undefined}
        />}
      </CenteredItem>
    </Wrapper>
  )
}

export default Board
