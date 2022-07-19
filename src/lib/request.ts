export default async function request<S>(url: string): Promise<S | Error> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, { method: 'GET' })

      if (!response.ok) {
        reject(`Failed: ${response.status}`)
      }

      return resolve(response.json())

    } catch (error: unknown) {
      reject(error)
    }
  })
}
