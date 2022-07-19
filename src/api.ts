import request from './lib/request'

const api = {
  getDeck: () =>
    request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'),
  getDraw: (deckId: string) =>
    request(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=10`),
}

export default api
