import { render, screen } from '@testing-library/react'
import React from 'react'

import { Names } from '../../types'
import Pile, { Props } from '../Pile'

describe('Pile', () => {
  const props: Props = {
    pile: {
      [Names.Me]: { image: 'image', value: 12, code: 'JH' },
      [Names.Milisav]: { image: 'image', value: 13, code: 'QH' },
    }
  }
  const third = {
    [Names.Mileva]: { image: 'image', value: 14, code: 'KH' }
  }
  const fourth = {
    [Names.Djura]: { image: 'image', value: 1, code: 'AH' }
  }

  const players4Props = {
    pile: {
      ...props.pile,
      ...third,
      ...fourth
    }
  }

  it('2 players', () => {
    const { container } = render(<Pile {...props} />)

    expect(screen.getAllByRole('img').length).toEqual(2)
    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /qh/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('3 players', () => {
    const newProps = {
      pile: {
        ...props.pile,
        ...third,
      }
    }
    const { container } = render(<Pile {...newProps} />)

    expect(screen.getAllByRole('img').length).toEqual(3)
    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /qh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /kh/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('4 players', () => {
    const { container } = render(<Pile {...players4Props} />)

    expect(screen.getAllByRole('img').length).toEqual(4)
    expect(screen.getByRole('img', { name: /jh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /qh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /kh/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /ah/i })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('4 players inline', () => {
    const { container } = render(<Pile {...players4Props} inline />)

    expect(container).toMatchSnapshot()
  })
})