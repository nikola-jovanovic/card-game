import React, { memo } from 'react'
import styled from 'styled-components'

import { Card as CardT } from '../types'

export type Props = CardT & {
  facedown?: boolean
  onClick?: (card: CardT) => void
}

const Image = styled.img`
  max-width: 80px;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`

const Card = ({
  code,
  value,
  image,
  facedown,
  onClick,
}: Props): JSX.Element => {
  if (facedown) {
    return (
      <Image
        src="https://dcassetcdn.com/design_img/3930521/154340/26190370/kfmqknarypcs90a4zrbf3ppavp_thumbnail.png"
        aria-label="facedown card"
      />
    )
  }

  const handleClick = () => {
    if (onClick) onClick({ code, value, image })
  }
  const img = <Image src={image} aria-label={code} />

  return onClick ? (
    <Button onClick={handleClick} aria-label={code}>
      {img}
    </Button>
  ) : img
}

export default memo(Card)
