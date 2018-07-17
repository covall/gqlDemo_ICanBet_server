import { ApolloServer, gql } from 'apollo-server'

import { teams, games, getGame } from './data'

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
    gameWithPenalties: Game
    aGame(id: ID!): Game
  }

  enum TeamAOrB {
    A
    B
  }

  input BetInput {
    resultA: Int!
    resultB: Int!
    wonInPenalties: TeamAOrB
  }

  type Mutation {
    bet(gameId: ID!, userId: ID!, bet: BetInput!): Bet
  }

  type Bet {
    gameId: ID!
    userID: ID!
    resultA: Int!
    result: Result
    penalties: TeamAOrB
  }

  type Team {
    code: ID!
    name: String!
    group: String!
  }

  type Result {
    a: Float!
    b: Float!
  }

  type Game {
    id: ID!
    phase: String!
    date: String!
    teamA: Team!
    teamB: Team!
    result: Result
    penalties: TeamAOrB
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    allTeams: () => teams,
    allGames: () => games,
    gameWithPenalties: () => games.find(match => match.penalties !== undefined),
    aGame: (_obj, args) => {
      const game = getGame(args.id)
      console.log('aGame', _obj, args, game)
      return game
    }
  },
  Result: {
    a: array => {
      return array[0]
    },
    b: array => {
      return array[1]
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
