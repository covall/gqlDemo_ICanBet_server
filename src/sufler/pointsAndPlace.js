import { getGame } from './data'

const recalculatePointsAndPlaces = gamblers => {
  gamblers.forEach(gambler => {
    gambler.bets = gambler.bets.map(bet => {
      return { ...bet, points: calculateGamePoints(bet) }
    })

    gambler.points = gambler.bets.reduce((sum, bet) => {
      return sum + bet.points
    }, 0)
  })

  let place = 1
  gamblers.sort((a, b) => b.points - a.points).forEach((gambler, index) => {
    if (index > 0 && gambler.points < gamblers[index - 1].points) {
      place = index + 1
    }
    gambler.place = place
  })
}

const calculateGamePoints = bet => {
  const game = getGame(bet.gameId)
  return calculateScore(game.result, bet.betNumbers)
}

const calculateScore = (gameResult, bet) => {
  if (gameResult[0] === bet[0] && gameResult[1] === bet[1]) {
    if (
      (gameResult[2] > gameResult[3] && bet[2] === 1) ||
      (gameResult[2] < gameResult[3] && bet[2] === 2)
    ) {
      // prawidłowo obstawione karne
      return 5
    }
    return 4
  } else if (gameResult[0] - gameResult[1] === bet[0] - bet[1]) {
    if (
      (gameResult[2] > gameResult[3] && bet[2] === 1) ||
      (gameResult[2] < gameResult[3] && bet[2] === 2)
    ) {
      // prawidłowo obstawione karne
      return 3
    }
    return 2
  } else if (
    (gameResult[0] > gameResult[1] && bet[0] > bet[1]) ||
    (gameResult[0] < gameResult[1] && bet[0] < bet[1])
  ) {
    return 1
  }
  return 0
}

export { recalculatePointsAndPlaces }
