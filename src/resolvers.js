// A map of functions which return data for the schema.
import { teams, games, getGame, gamblers, getGambler } from './data'
import { recalculatePointsAndPlaces } from './pointsAndPlace'

recalculatePointsAndPlaces(gamblers)

const resolvers = {
  Mutation: {
    bet: (_root, { gameId, gamblerId, betInput }) => {
      const gambler = gamblers.find(gambler => gambler.nick === gamblerId)
      ensureGamblerHasGames(gambler)
      const bet = gambler.bets.find(bet => String(bet.gameId) === String(gameId))
      if (bet) {
        bet.betNumbers = [betInput.a, betInput.b]
        if (betInput.winInPenalties) {
          if (betInput.winInPenalties === 'A') {
            bet.betNumbers.push(1)
          } else {
            bet.betNumbers.push(2)
          }
        }
        // !recalculate points and places
        recalculatePointsAndPlaces(gamblers)
        return {
          game: getGame(gameId),
          gambler,
          betNumbers: bet.betNumbers,
          points: bet.points
        }
      }
      return null
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
      const penalties = game.penalties || []
      return [...game.result, ...penalties]
    }
  },
  GameResult: {
    a: array => {
      return array[0]
    },
    b: array => {
      return array[1]
    },
    aPenalties: array => {
      return array[2]
    },
    bPenalties: array => {
      return array[3]
    }
  },
  Gambler: {
    name: gambler => gambler.nick,
    id: gambler => gambler.nick
    // bets: gambler => {
    //   if (!gambler.bets) {
    //     return []
    //   }

    //   return gambler.bets.map(gameWithBet => {
    //     return {
    //       gambler,
    //       game: getGame(gameWithBet.gameId),
    //       betNumbers: gameWithBet.betNumbers,
    //       points: gameWithBet.points
    //     }
    //   })
    // }
  },
  Bet: {
    game: gameWithBet => getGame(gameWithBet.gameId),
    gambler: gameWithBet => getGambler(gameWithBet.gamblerId)
  },
  BetNumbers: {
    a: result => result[0],
    b: result => result[1],
    winInPenalties: result => {
      if (!result[2]) {
        return null
      }
      return result[2] === 1 ? 'A' : 'B'
    }
  }
}

function ensureGamblerHasGames(gambler) {
  if (!gambler.bets) {
    gambler.bets = {}
  }
  if (!Array.isArray(gambler.bets.games)) {
    gambler.bets.games = []
  }
}

export default resolvers
