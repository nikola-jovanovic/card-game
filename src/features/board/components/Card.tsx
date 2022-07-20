import React, { memo } from 'react'
import styled from 'styled-components'

import { Card as CardT } from '../types'

export type Props = CardT & {
  facedown?: boolean
  onClick?: any
}

const Image = styled.img`
  max-width: 80px;
`

const Button = styled.button`
  border: none;
  padding: 0;
  margin-right: 4px;
  background-color: transparent;
  cursor: pointer;
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

  const handleClick = () => onClick({ code, value, image })
  const img = <Image src={image} aria-label={code} />

  return onClick ? (
    <Button onClick={handleClick} aria-label={code}>
      {img}
    </Button>
  ) : img
}

export default memo(Card)
