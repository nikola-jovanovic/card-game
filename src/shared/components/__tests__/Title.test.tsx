import { render, screen } from '@testing-library/react'
import React from 'react'

import Title from '../Title'

describe('Title', () => {
  it('render', () => {
    const { container } = render(<Title>title</Title>)

    expect(screen.getByRole('heading', { name: /title/i, level: 1 })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('render as h2', () => {
    render(<Title as='h2'>title</Title>)

    expect(screen.getByRole('heading', { name: /title/i, level: 2 })).toBeInTheDocument()
  })
})