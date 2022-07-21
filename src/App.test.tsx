import React from 'react'

import App from './App'
import api from './features/board/api'
import { fireEvent, render, screen, waitFor } from './testing'

describe('App', () => {
  it('render', async () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
    api.getDeck = jest.fn().mockImplementationOnce(() => Promise.resolve({ deck_id: '123' }))
    api.getDraw = jest.fn()
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'JH', image: 'image', value: 'JACK' }] }))
      .mockImplementationOnce(() => Promise.resolve({ cards: [{ code: 'QH', image: 'image', value: 'QUEEN' }] }))

    render(<App />)

    expect(screen.getByRole('heading', { name: /select number of players/i, level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /3 players/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /4 players/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /2 players/i }))

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /loading/i, level: 1 })).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /loading.../i, level: 1 })).not.toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: /me/i, level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /milisav/i, level: 2 })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /facedown card/i })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /jh/i }))

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Winner is milisav with score 25/i, level: 1 })).toBeInTheDocument()
    }, { timeout: 4000 })

    fireEvent.click(screen.getByRole('button', { name: /play again/i }))

    expect(screen.getByRole('heading', { name: /select number of players/i, level: 1 })).toBeInTheDocument()
  })
})