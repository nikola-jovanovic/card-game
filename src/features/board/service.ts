import { fold } from 'fp-ts/Either'
import { identity, pipe } from 'fp-ts/function'

import api from './api'
import { getId } from './entities/Deck'
import { getCards } from './entities/Draw'
import { Card } from './types'

const fromNumber = (length: number, mapper: () => any) => Array.from({ length }, () => mapper)

const serial = (funcs: any) =>
  funcs.reduce((promise: any, func: any) => {
    return promise.then((result: any) => func().then((x: any) => x ? [...result, x] : result))
  }, Promise.resolve([]))


export function getData(players: number): Promise<Card[][]> {
  return new Promise((resolve, reject) => {
    api.getDeck()
      .then((deck) => {
        pipe(
          deck,
          getId,
          fold(
            reject,
            (id) => {
              serial(
                fromNumber(players,
                  () =>
                    api.getDraw(id)
                      .then((draw: unknown) => pipe(
                        draw,
                        getCards,
                        fold(
                          reject,
                          identity
                        ),
                      )
                      )
                )
              )
                .then(resolve)
                .catch(reject)
            },
          ),
        )
      })
      .catch(reject)
  })
}

