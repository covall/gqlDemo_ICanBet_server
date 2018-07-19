// A map of functions which return data for the schema.
import { teams, games, getGame, gamblers } from './data'
import { calculateGameScore } from './pointsAndPlace'

gamblers.forEach(gambler => {
  gambler.bets.games = gambler.bets.games.map(gameWithBets => {
    return { ...gameWithBets, points: calculateGameScore(gameWithBets) }
  })
})

const resolvers = {
  Mutation: {
    bet: (_root, { gameId, gamblerId, bet }) => {
      const gambler = gamblers.find(gambler => gambler.nick === gamblerId)
      ensureGamblerHasGames(gambler)
      const gameWithBet = gambler.bets.games.find(game => String(game.id) === String(gameId))
      if (gameWithBet) {
        gameWithBet.bet = [bet.a, bet.b]
        if (bet.winInPenalties) {
          if (bet.winInPenalties === 'A') {
            gameWithBet.bet.push(1)
          } else {
            gameWithBet.bet.push(2)
          }
        }
        // TODO: recalculate points and places
        gameWithBet.points = calculateGameScore(gameWithBet)
        return {
          game: getGame(gameId),
          gambler,
          bet: gameWithBet.bet
        }
      }
      return null
    }
  },
  Query: {
    hello: () => 'world',
    allTeams: () => teams,
    allGames: () => games,
    allGamblers: () => gamblers,

    aGame: (_obj, args) => {
      const game = getGame(args.id)
      return game
    }
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
    id: gambler => gambler.nick,
    bets: gambler => {
      if (!gambler.bets || !gambler.bets.games) {
        return []
      }

      const gamesWithBets = gambler.bets.games
      const bets = gamesWithBets.map(gameWithBet => {
        console.log('gameWithBet', gameWithBet)

        return {
          gambler,
          game: getGame(gameWithBet.id),
          bet: gameWithBet.bet,
          points: gameWithBet.points
        }
      })
      return bets
    },
    points: () => Math.floor(Math.random() * 70) + 1,
    place: () => Math.floor(Math.random() * 70) + 1
    // points: gambler => {
    //   if (Array.isArray(gambler.bets.games)) {
    //     return gambler.bets.games.reduce((prev, curr) => {
    //       const game = getGame(curr.id)
    //       return prev + calculateScore(game.result, curr.bet)
    //     }, 0)
    //   } else {
    //     return 0
    //   }
    // },
    // place: gambler => {}
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

export default resolvers

function ensureGamblerHasGames(gambler) {
  if (!gambler.bets) {
    gambler.bets = {}
  }
  if (!Array.isArray(gambler.bets.games)) {
    gambler.bets.games = []
  }
}
