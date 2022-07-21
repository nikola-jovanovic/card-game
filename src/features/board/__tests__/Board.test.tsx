import React from 'react'

import { render, screen, Screens, waitFor } from '../../../testing'
import api from '../api'
import Board from '../Board'

describe('Board', () => {
  beforeEach(() => {
    api.getDeck = jest.fn().mockImplementationOnce(() => Promise.resolve({ deck_id: '123' }))
    api.getDraw = jest.fn()
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'JH', image: 'image', value: 'JACK' }] }))
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'QH', image: 'image', value: 'QUEEN' }] }))
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'KH', image: 'image', value: 'KING' }] }))
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'AH', image: 'image', value: 'ACE' }] }))
  })

  it('desktop', async () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
    const { container } = render(<Board selected={4} />)

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /loading.../i, level: 1 })).not.toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
  it('mobile', async () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
    const { container } = render(<Board selected={4} />, { screen: Screens.Mobile })

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /loading.../i, level: 1 })).not.toBeInTheDocument()
    })

    expect(container).toMatchSnapshot()
  })
})