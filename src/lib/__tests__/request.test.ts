import request, { ResponseError } from '../request'
import mockFetch from '../../testing/mockFetch'

describe('request', () => {
  it('success', async () => {
    const data = { deck_id: 1 }
    mockFetch({ ok: true, json: () => Promise.resolve(data), status: 200 } as Response)

    const response = await request('url')
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith('url', { method: 'GET' })
    expect(response).toEqual(data)
  })

  it('fail', async () => {
    const response = { ok: false, status: 500, statusText: 'something went wrong' } as Response
    mockFetch(response)

    await expect(request('url')).rejects.toEqual(new ResponseError(response))
  })
})
