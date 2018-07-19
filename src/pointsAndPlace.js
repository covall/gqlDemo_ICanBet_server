import { getGame } from './data'

const calculateGameScore = gameWithBet => {
  const game = getGame(gameWithBet.id)
  return calculateScore(game.result, gameWithBet.bet)
}

const calculateScore = (gameResult, bet) => {
  // console.log('calculateScore', gameResult, bet)
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

export { calculateGameScore }
