import React from 'react'
import { render } from '@testing-library/react'

import Centered from '../Centered'

describe('Centered', () => {
  it('render', () => {
    const { container } = render(<Centered>text</Centered>)

    expect(container).toMatchSnapshot()
  })
})