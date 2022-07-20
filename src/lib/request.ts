export interface ResponseError extends Error {
  status: number,
  url: string
}

export class ResponseError extends Error {
  constructor(response: Response) {
    super(response.statusText)

    this.name = 'ResponseError'
    this.status = response.status
    this.url = response.url
  }
}

export default async function request<S>(url: string): Promise<S | ResponseError> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, { method: 'GET' })

      if (!response.ok) {
        reject(new ResponseError(response))
      }

      return resolve(response.json())

    } catch (error) {
      reject(error)
    }
  })
}
