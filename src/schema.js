import { gql } from 'apollo-server'

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    teams: [Team]!
    games: [Game]!
    game(id: ID!): Game
    gamblers: [Gambler]!
    gambler(id: ID!): Gambler
  }

  type Mutation {
    bet(gameId: ID!, gamblerId: ID!, betInput: BetInput!): Bet
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
    betNumbers: BetNumbers
    points: Int
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
    points: Int!
    place: Int!
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
