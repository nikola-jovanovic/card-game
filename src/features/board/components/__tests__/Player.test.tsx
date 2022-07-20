import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Player, { Props } from '../Player'
import { Names } from '../../types'

describe('Player', () => {
  let props: Props

  beforeAll(() => {
    props = {
      name: Names.Me,
      score: 50,
      cards: [{
        code: 'JH',
        image: 'image-url',
        value: 5
      }],
      variant: 'user',
      onPlay: jest.fn(),
      active: true
    }
  })

  it('user', () => {
    const { container } = render(<Player {...props} />)

    const button = screen.getByRole('button', { name: /jh/i })

    expect(button).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /me/i, level: 2 })).toBeInTheDocument()

    expect(container).toMatchSnapshot()

    fireEvent.click(button)

    expect(props.onPlay).toHaveBeenCalledTimes(1)
    expect(props.onPlay).toHaveBeenCalledWith(props.cards[0])
  })

  it('cpu', () => {
    const { container } = render(<Player {...props} variant='cpu' onPlay={undefined} />)

    expect(screen.getByRole('img', { name: /facedown/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /me/i, level: 2 })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})