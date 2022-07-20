import React, { memo } from 'react'
import styled from 'styled-components'

import Centered from '../../../shared/components/Centered'
import { Pile as PileT } from '../types'
import Card from './Card'

export type Props = {
  pile: PileT
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Pile = ({ pile }: Props): JSX.Element => {
  return (
    <Centered>
      <Wrapper>
        <div>
          {pile.Milisav && <Card {...pile.Milisav} />}
        </div>
        <FlexContainer>
          <div>
            {pile.Mileva && <Card {...pile.Mileva} />}
          </div>
          <div>
            {pile.Djura && <Card {...pile.Djura} />}
          </div>
        </FlexContainer>
        <div>
          {pile.Me && <Card {...pile.Me} />}
        </div>
      </Wrapper>
    </Centered>
  )
}

export default memo(Pile)
