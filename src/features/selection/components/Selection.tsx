import React from 'react'
import Button from '../../../shared/components/Button'
import CenteredContent from '../../../shared/components/CenteredContent'
import Title from '../../../shared/components/Title'

type Props = {
  onSelection: (count: number) => void
}

const playersCount = [2, 3, 4] as const

const Selection = ({ onSelection }: Props): JSX.Element => {

  return (
    <CenteredContent>
      <div>
        <Title>Select number of players</Title>

        {playersCount.map((count) => (
          <Button key={count} onClick={() => onSelection(count)}>
            {count} Players
          </Button>
        ))}
      </div>
    </CenteredContent>
  )
}

export default Selection
