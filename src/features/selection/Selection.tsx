import React from 'react'
import Button from '../../shared/components/Button'
import Centered from '../../shared/components/Centered'
import Title from '../../shared/components/Title'

type Props = {
  onSelection: (count: number) => void
}

const playersCount = [2, 3, 4] as const

const Selection = ({ onSelection }: Props): JSX.Element => {

  return (
    <Centered>
      <div>
        <Title>Select number of players</Title>

        {playersCount.map((count) => (
          <Button key={count} onClick={() => onSelection(count)}>
            {count} Players
          </Button>
        ))}
      </div>
    </Centered>
  )
}

export default Selection
