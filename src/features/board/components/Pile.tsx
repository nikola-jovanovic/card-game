import React, { memo } from 'react'
import styled from 'styled-components'

import Centered from '../../../shared/components/Centered'
import FlexContainer from '../../../shared/components/FlexContainer'
import { Pile as PileT } from '../types'
import Card from './Card'

export type Props = {
  pile: PileT
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  max-width: 200px;
`

const Container = styled(FlexContainer)`
  justify-content: space-between;
`

const Pile = ({ pile }: Props): JSX.Element => {
  return (
    <Centered>
      <Wrapper>
        <div>
          {pile.Milisav && <Card {...pile.Milisav} />}
        </div>
        <Container>
          <div>
            {pile.Mileva && <Card {...pile.Mileva} />}
          </div>
          <div>
            {pile.Djura && <Card {...pile.Djura} />}
          </div>
        </Container>
        <div>
          {pile.Me && <Card {...pile.Me} />}
        </div>
      </Wrapper>
    </Centered>
  )
}

export default memo(Pile)
