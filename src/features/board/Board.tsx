import React, { useEffect } from 'react'
import styled from 'styled-components'
import CenteredContent from '../../shared/components/CenteredContent'
import Title from '../../shared/components/Title'
import useBoard from './useBoard'

const PageContainer = styled.div`
  background-color: #04491f;
  height: 100%;
  position: absolute;
  width: 100%;
`

type Props = { selected: number }

const Board = ({ selected }: Props): JSX.Element => {
  const { init, loading } = useBoard()

  useEffect(() => {
    init(selected)
  }, [])

  return (
    <PageContainer>
      {loading ? <CenteredContent>
        <Title>Loading...</Title>
      </CenteredContent> : <p>Board</p>}
    </PageContainer>
  )
}

export default Board
