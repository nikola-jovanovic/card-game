const mockFetch = (response: Response) => jest
  .spyOn(global, 'fetch')
  .mockImplementationOnce(jest.fn(() => Promise.resolve(response),) as jest.Mock)

export default mockFetch
