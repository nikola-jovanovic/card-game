import { render, screen } from '@testing-library/react'
import React from 'react'

import Button from '../Button'

describe('Button', () => {
  it('render', () => {
    const { container } = render(<Button>click me</Button>)

    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})