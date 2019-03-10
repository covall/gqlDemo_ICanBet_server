import slugify from 'slugify'
import { recalculatePointsAndPlaces } from '../pointsAndPlace'

const randomResult = ({ withPenalties = false }) => {
  // [1, 2] - result 1 : 2
  // [2, 2, 1] - result 2 : 2 and first team won in penalties
  // random between 0 and 3
  const result = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
  if (withPenalties && result[0] === result[1]) {
    result.push(Math.floor(Math.random() * 2) + 1)
  }
  return result
}

const gamblerWithRandomBets = gamblerId => {
  return {
    nick: gamblerId,
    bets: Array(64)
      .fill()
      .map((_, index) => ({
        id: `${getGamblerSlug(gamblerId)}-${index + 1}`,
        gamblerId,
        gameId: index + 1,
        betNumbers: randomResult({ withPenalties: index + 1 > 48 })
      }))
  }
}

const setEmptyGamblersBetsForGame = gameId => {
  gamblers.forEach((gambler, index) => {
    gambler.bets = [
      ...gambler.bets,
      {
        id: `${getGamblerSlug(gambler.nick)}-${index + 1}`,
        gamblerId: gambler.nick,
        gameId,
        betNumbers: [1, 2]
      }
    ]
  })

  // !recalculate points and places
  recalculatePointsAndPlaces(gamblers)
}

const getGambler = gamblerId =>
  gamblers.find(gambler => gambler.nick === gamblerId)

const getGamblerSlug = name => {
  return slugify(name, {
    replacement: '-',
    remove: /\s/gi,
    lower: true
  })
}

const gamblers = [
  gamblerWithRandomBets('Piotrek'),
  gamblerWithRandomBets('Konrad'),
  gamblerWithRandomBets('Tomek'),
  gamblerWithRandomBets('Kuba'),
  gamblerWithRandomBets('Marek'),
  gamblerWithRandomBets('Marcin'),
  gamblerWithRandomBets('Ewelina'),
  gamblerWithRandomBets('Wiesława')
]

export { gamblers, getGambler, setEmptyGamblersBetsForGame }
