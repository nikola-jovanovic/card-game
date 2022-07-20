import { ResponseError } from '../../../lib/request'
import mockFetch from '../../../testing/mockFetch'
import api from '../api'

describe('api', () => {
  describe('getDeck', () => {
    it('success', async () => {
      const data = { deck_id: 1 }
      mockFetch({ ok: true, json: () => Promise.resolve(data), status: 200 } as Response)

      expect(await api.getDeck()).toEqual(data)
    })

    it('fail', async () => {
      const response = { ok: false, status: 500 } as Response
      mockFetch(response)

      await expect(api.getDeck()).rejects.toEqual(new ResponseError(response))
    })
  })

  describe('getDraw', () => {
    it('success', async () => {
      const data = { cards: [] }
      mockFetch({ ok: true, json: () => Promise.resolve(data), status: 200 } as Response)

      expect(await api.getDraw('1')).toEqual(data)
    })

    it('fail', async () => {
      const response = { ok: false, status: 500 } as Response
      mockFetch(response)

      await expect(api.getDeck()).rejects.toEqual(new ResponseError(response))
    })
  })
})
