import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../shared/components/Button'
import Centered from '../../shared/components/Centered'
import Title from '../../shared/components/Title'
import Pile from './components/Pile'
import Player from './components/Player'
import useBoard from './useBoard'

type Props = { selected: number }

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`

const Container = styled.div`
  display: flex;
  flex: 1;
`

const Flex = styled.div`
  flex: 1;
`

const ExtendedFlex = styled(Flex)`
  flex: 1;
  display: flex;
  align-items: center;
`

const PlayerWrapper = styled.div`
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

  return (
    <Wrapper>
      <PlayerWrapper>
        {players.Milisav.active && <Player {...players.Milisav} variant="cpu" />}
      </PlayerWrapper>
      <Container>
        <ExtendedFlex>
          {players.Mileva.active && <Player {...players.Mileva} variant="cpu" />}
        </ExtendedFlex>
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
        <ExtendedFlex>
          {players.Djura.active && <Player {...players.Djura} variant="cpu" />}
        </ExtendedFlex>
      </Container>
      <PlayerWrapper>
        {players.Me.active && <Player
          {...players.Me}
          variant="user"
          onPlay={Object.values(pile).length === 0 && playCard}
        />}
      </PlayerWrapper>
    </Wrapper>
  )
}

export default Board
