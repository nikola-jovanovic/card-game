import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Card, { Props } from '../Card'

describe('Card', () => {
  let props: Props

  beforeAll(() => {
    props = {
      code: 'JH',
      image: 'image-url',
      value: 5
    }
  })

  it('render', () => {
    const onClick = jest.fn()
    const { container } = render(<Card {...props} onClick={onClick} />)

    const button = screen.getByRole('button', { name: /jh/i })

    expect(button).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith(props)
  })

  it('facedown', () => {
    const { container } = render(<Card {...props} facedown />)

    expect(screen.getByRole('img', { name: /facedown/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('render without click', () => {
    const { container } = render(<Card {...props} />)

    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /jh/i })).not.toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})