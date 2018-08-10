// A map of functions which return data for the schema.
import { teams, games, getGame, gamblers, getGambler } from './data'
import { recalculatePointsAndPlaces } from './pointsAndPlace'

recalculatePointsAndPlaces(gamblers)

const resolvers = {
  Mutation: {
    makeBet: (_root, { gameId, gamblerId, betInput }) => {
      const gambler = getGambler(gamblerId)
      const gamblersBetForGame = getGamblersBetForGame(gambler, gameId)

      gamblersBetForGame.betNumbers = [betInput.a, betInput.b]
      if (betInput.winInPenalties) {
        if (betInput.winInPenalties === 'A') {
          gamblersBetForGame.betNumbers.push(1)
        } else {
          gamblersBetForGame.betNumbers.push(2)
        }
      }
      // !recalculate points and places
      recalculatePointsAndPlaces(gamblers)

      return getGamblersBetForGame(gambler, gameId)
    },
    editGameResult: (_root, { id, resultInput }) => {
      const game = getGame(id)

      if (resultInput.aPenalties !== null || resultInput.bPenalties !== null) {
        if (resultInput.aPenalties === null || resultInput.bPenalties === null) {
          throw new Error('Należy wprowadzić kompletny wynik karnych.')
        }

        if (resultInput.aPenalties === resultInput.bPenalties) {
          throw new Error('Nie można dodać remisu w karnych.')
        }
      }

      if (resultInput.a < 0 || resultInput.b < 0 || resultInput.aPenalties < 0 || resultInput.bPenalties < 0) {
        throw new Error('Minusowy wynik? Bez jaj.')
      }

      if (game.phase !== 'Grupa' && resultInput.a === resultInput.b) {
        throw new Error('Jak to remis? Karne powinny być!')
      }

      game.result[0] = resultInput.a
      game.result[1] = resultInput.b
      game.result[2] = resultInput.aPenalties
      game.result[3] = resultInput.bPenalties

      recalculatePointsAndPlaces(gamblers)

      return game
    },
  },
  Query: {
    teams: () => teams,
    games: () => games,
    game: (_obj, args) => getGame(args.id),
    gamblers: () => gamblers,
    gambler: (_obj, args) => getGambler(args.id),
    bets: () =>
      gamblers.reduce((allBets, gambler) => {
        const gamblerBets = gambler.bets
        return [...allBets, ...gamblerBets]
      }, [])
  },
  Game: {
    result: game => {
      return {
        a: game.result[0],
        b: game.result[1],
        aPenalties: game.result[2],
        bPenalties: game.result[3]
      }
    },
    bets: game =>
      gamblers.reduce((allBets, gambler) => {
        const gamblerBetsForGame = gambler.bets.filter(bet => bet.gameId === game.id)

        return [...allBets, ...gamblerBetsForGame]
      }, [])
  },
  Gambler: {
    name: gambler => gambler.nick,
    id: gambler => gambler.nick
  },
  Bet: {
    game: userBetForGame => getGame(userBetForGame.gameId),
    gambler: userBetForGame => getGambler(userBetForGame.gamblerId),
    betNumbers: userBetForGame => {
      let winInPenalties
      if (!userBetForGame.betNumbers[2]) {
        winInPenalties = null
      } else {
        winInPenalties = userBetForGame.betNumbers[2] === 1 ? 'A' : 'B'
      }
      return {
        a: userBetForGame.betNumbers[0],
        b: userBetForGame.betNumbers[1],
        winInPenalties
      }
    }
  }
}

function getGamblersBetForGame(gambler, gameId) {
  if (!Array.isArray(gambler.bets)) {
    gambler.bets = []
  }

  let bet = gambler.bets.find(bet => String(bet.gameId) === String(gameId))
  if (!bet) {
    bet = {
      gamblerId: gambler.id,
      gameId,
      betNumbers: null
    }
  }
  return bet
}

export default resolvers
