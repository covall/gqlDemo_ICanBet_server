import { ApolloServer, gql } from 'apollo-server'

import { teams, games, getGame, gamblers } from './data'

// The GraphQL schema
const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    allTeams: [Team]!
    allGames: [Game]!
    allGamblers: [Gambler]!
    aGame(id: ID!): Game
  }

  type Mutation {
    bet(gameId: ID!, gamblerId: ID!, bet: BetInput!): Bet
  }

  enum TeamAOrB {
    A
    B
  }

  input BetInput {
    a: Int!
    b: Int!
    winInPenalties: TeamAOrB
  }

  type BetNumbers {
    a: Int!
    b: Int!
    winInPenalties: TeamAOrB
  }

  type Bet {
    game: Game!
    gambler: Gambler!
    result: BetNumbers
  }

  type Team {
    code: ID!
    name: String!
    group: String!
  }

  type GameResult {
    a: Int!
    b: Int!
    aPenalties: Int
    bPenalties: Int
  }

  type Gambler {
    id: ID!
    name: String!
    bets: [Bet]!
  }

  type Game {
    id: ID!
    phase: String!
    date: String!
    teamA: Team!
    teamB: Team!
    result: GameResult
  }
`

// A map of functions which return data for the schema.
const resolvers = {
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
      return gambledGames.map(g => {
        return {
          game: getGame(g.gameId),
          gambler,
          result: g.result
        }
      })
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

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
