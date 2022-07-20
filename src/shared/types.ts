export type Action<P, M = void> = {
  type: string
  payload: P
  meta: M
}

