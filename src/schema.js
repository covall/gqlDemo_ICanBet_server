import { gql } from 'apollo-server'

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
    bet: BetNumbers
    score: Int
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

export default typeDefs
