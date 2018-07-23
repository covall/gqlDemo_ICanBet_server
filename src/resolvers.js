// A map of functions which return data for the schema.
import { teams, games, getGame, gamblers, getGambler } from './data'
import { recalculatePointsAndPlaces } from './pointsAndPlace'

recalculatePointsAndPlaces(gamblers)

const resolvers = {
  Mutation: {
    bet: (_root, { gameId, gamblerId, betInput }) => {
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
    }
  },
  Query: {
    teams: () => teams,
    games: () => games,
    game: (_obj, args) => getGame(args.id),
    gamblers: () => gamblers,
    gambler: (_obj, args) => getGambler(args.id),
    bets: () =>
      gamblers.reduce((allBets, gambler) => {
        const gablerBets = gambler.bets
        return [...allBets, ...gablerBets]
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
