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
    allTeams: () => Object.keys(teams).map(key => teams[key]),
    allGames: () => games,
    gameWithPenalties: () => games.find(match => match.penalties !== undefined)
  },
  Team: {
    code: name => {
      return Object.keys(teams).find(key => teams[key] === name)
    },
    name: name => name
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
