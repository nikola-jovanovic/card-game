import api from '../api'

interface Response {
  ok: boolean,
  json?: () => Promise<{ deck_id?: number } | { cards: string[] }>,
  status: number
}

const mockFetch = (response: Response) => jest
  .spyOn(global, "fetch")
  .mockImplementationOnce(jest.fn(() => Promise.resolve(response),) as jest.Mock)

describe('api', () => {
  describe('getDeck', () => {
    it('success', async () => {
      const data = { deck_id: 1 }
      mockFetch({ ok: true, json: () => Promise.resolve(data), status: 200 })

      expect(await api.getDeck()).toEqual(data)
    })

    it('fail', async () => {
      mockFetch({ ok: false, status: 500 })

      await expect(api.getDeck()).rejects.toEqual('Failed: 500')
    })
  })

  describe('getDraw', () => {
    it('success', async () => {
      const data = { cards: [] }
      mockFetch({ ok: true, json: () => Promise.resolve(data), status: 200 })

      expect(await api.getDraw('1')).toEqual(data)
    })

    it('fail', async () => {
      mockFetch({ ok: false, status: 500 })

      await expect(api.getDraw("1")).rejects.toEqual('Failed: 500')
    })
  })
})
