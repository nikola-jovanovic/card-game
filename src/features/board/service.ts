import { fold } from 'fp-ts/Either'
import { flow, identity } from 'fp-ts/function'

import api from './api'
import { getId } from './entities/Deck'
import { getCards as getCardsProp } from './entities/Draw'
import { State } from './state/pile'
import { Card, Names, Player, Score } from './types'

type Result = {
  winner: Names
  highestCard: number
  score: Score,
  pile: State
}

const fromNumber = <T>(length: number, mapper: () => T) => Array.from({ length }, () => mapper)
const rand = (n: number) => Math.floor(Math.random() * n + 1)

const serial = (funcs: any) =>
  funcs.reduce((promise: any, func: any) => {
    return promise.then((result: any) => func().then((x: any) => x ? [...result, x] : result))
  }, Promise.resolve([]))

export function getData(players: number): Promise<Card[][]> {
  return new Promise((resolve, reject) => {
    api.getDeck()
      .then(
        flow(
          getId,
          fold(
            reject,
            (id) => {
              serial(
                fromNumber(players,
                  () =>
                    api.getDraw(id)
                      .then(
                        flow(
                          getCardsProp,
                          fold(
                            reject,
                            identity
                          ),
                        ))
                )
              )
                .then(resolve)
                .catch(reject)
            },
          ),
        ))
      .catch(reject)
  })
}

export function getCards(card: Card, players: Player[]): Promise<Result> {
  return Promise.resolve(players.reduce(
    (result: Result, player: Player) => {
      const index = rand(player.cards.length)
      const card = player.cards[index - 1]

      return {
        winner: card.value >= result.highestCard ? player.name : result.winner,
        highestCard: card.value >= result.highestCard ? card.value : result.highestCard,
        score: result.score + card.value,
        pile: {
          ...result.pile,
          [player.name]: card
        }
      }
    },
    { pile: { [Names.Me]: card } as State, winner: Names.Me, highestCard: card.value, score: card.value },
  ))
}
