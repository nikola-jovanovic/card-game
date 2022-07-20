import { Errors } from 'io-ts'

export function decodeErrors(e: Errors): string[] {
  return e.map(e => {
    return `Invalid value ${e.value} supplied to ${e.context.map(({ key, type }) => `${key}: ${type.name}`).join('/')}`
  })
}
