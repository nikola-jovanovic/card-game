import React, { memo } from 'react'
import styled from 'styled-components'

import Centered from '../../../shared/components/Centered'
import FlexContainer from '../../../shared/components/FlexContainer'
import { Pile as PileT } from '../types'
import Card from './Card'

export type Props = {
  pile: PileT,
  inline?: boolean
}

const Wrapper = styled.div<{ inline?: boolean }>`
  display: block;
  max-width: ${(props) => props.inline ? 'auto' : '200px'};
  text-align: center;
  width: 100%;
`

const Container = styled(FlexContainer)`
  justify-content: space-between;
  margin-top: 25px;
`

const Pile = ({ pile, inline }: Props): JSX.Element => {
  return (
    <Centered>
      <Wrapper inline={inline}>
        <div>
          {inline ? (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {pile.Milisav && <Card {...pile.Milisav} />}
              {pile.Mileva && <Card {...pile.Mileva} />}
              {pile.Djura && <Card {...pile.Djura} />}
            </div>
          ) : pile.Milisav && <Card {...pile.Milisav} />}
        </div>
        <Container>
          <div>
            {!inline && pile.Mileva && <Card {...pile.Mileva} />}
          </div>
          <div>
            {!inline && pile.Djura && <Card {...pile.Djura} />}
          </div>
        </Container>
        <div style={{ marginTop: '25px' }}>
          {pile.Me && <Card {...pile.Me} />}
        </div>
      </Wrapper>
    </Centered>
  )
}

export default memo(Pile)
