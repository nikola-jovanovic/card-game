import { fireEvent,render, screen } from '@testing-library/react'
import React from 'react'

import Selection from '../Selection'

describe('Selection', () => {
  it('render', () => {
    const onSelection = jest.fn()
    const { container } = render(<Selection onSelection={onSelection} />)

    const button = screen.getByRole('button', { name: /4 players/i })

    expect(screen.getByRole('heading', { name: /select number of players/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /2 players/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /3 players/i })).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(container).toMatchSnapshot()

    fireEvent.click(button)

    expect(onSelection).toHaveBeenCalledTimes(1)
    expect(onSelection).toHaveBeenCalledWith(4)
  })
})