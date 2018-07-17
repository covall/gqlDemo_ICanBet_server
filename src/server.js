import { ApolloServer, gql } from 'apollo-server'

import { teams, games } from './data'

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    allTeams: [Team]!
    allGames: [Game]!
    gameWithPenalties: Game
    aGame(id: Float): Game
  }

  type Team {
    code: String!
    name: String!
    group: String!
  }

  type Result {
    a: Float!
    b: Float!
  }

  type Game {
    phase: String!
    date: String!
    teamA: Team!
    teamB: Team!
    result: Result
    penalties: Result
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    allTeams: () => teams,
    allGames: () => games,
    gameWithPenalties: () => games.find(match => match.penalties !== undefined)
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
