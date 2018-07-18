// A map of functions which return data for the schema.
import { teams, games, getGame, gamblers } from './data'

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

const resolvers = {
  Mutation: {
    bet: (root, { gameId, gamblerId, bet }) => {
      const gambler = gamblers.find(gambler => gambler.nick === gamblerId)
      console.log('bet:', gameId, gamblerId, bet)
      if (!gambler.bets) {
        gambler.bets = {}
      }
      if (!Array.isArray(gambler.bets.games)) {
        gambler.bets.games = []
      }
      console.log('gambler:', JSON.stringify(gambler, null, 2))
      const game = gambler.bets.games.find(game => String(game.id) === String(gameId))
      console.log('game:', JSON.stringify(game, null, 2))
      if (game) {
        game.bet = [bet.a, bet.b]
        if (bet.winInPenalties) {
          if (bet.winInPenalties === 'A') {
            game.bet.push(1)
          } else {
            game.bet.push(2)
          }
        }
        console.log('game modified', game)
        return {
          game: getGame(gameId),
          gambler,
          bet: game.bet
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
      console.log('aGame', _obj, args, game)
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

      const gambledGames = gambler.bets.games
      const bets = gambledGames.map(g => {
        const game = getGame(g.id)
        const score = calculateScore(game.result, g.bet)
        return {
          game,
          gambler,
          bet: g.bet,
          score
        }
      })
      return bets
    }
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
