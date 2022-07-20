import React, { memo } from 'react'
import styled from 'styled-components'

import Title from '../../../shared/components/Title'
import { Player as PlayerT } from '../types'
import Card from './Card'

export type Props = PlayerT & {
  variant: 'user' | 'cpu'
  onPlay?: any
}

const CardWrapper = styled.div<{ padding: boolean }>`
  padding-left: ${(props) => (props.padding ? 50 : 0)}px;

  & > img {
    margin-left: -50px;
  }
`

const Name = styled(Title) <{ color: string }>`
  color: ${props => props.color};
  margin: 0 0 5px;
`

const Score = styled.p`
  margin: 0 0 10px
`

const Player = ({
  name,
  score,
  cards,
  onPlay,
  variant,
}: Props): JSX.Element => {
  return (
    <div>
      <Name as="h2" color={variant === 'cpu' ? 'white' : 'yellow'}>{name}</Name>
      <Score>Score: {score}</Score>
      <CardWrapper padding={variant === 'cpu'}>
        {cards.map((card) => (
          <Card key={card.code} {...card} facedown={variant === 'cpu'} onClick={onPlay} />
        ))}
      </CardWrapper>
    </div>
  )
}

export default memo(Player)
