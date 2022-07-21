import { render } from '@testing-library/react'
import React from 'react'

import FlexContainer from '../FlexContainer'

describe('FlexContainer', () => {
  it('render', () => {
    const { container } = render(<FlexContainer>click me</FlexContainer>)

    expect(container).toMatchSnapshot()
  })
})