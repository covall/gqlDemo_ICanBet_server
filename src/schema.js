import { gql } from 'apollo-server'

const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    games: [Game]!
    gamblers: [Gambler]!
    bets: [Bet]!
  }

  type Mutation {
    makeBet(gameId: ID!, gamblerId: ID!, betInput: BetInput!): Bet
    addGameResult(
      phase: String!
      date: String!
      teamA: ID!
      teamB: ID!
      resultInput: GameResultInput!
    ): Game
    editGameResult(id: ID!, resultInput: GameResultInput!): Game
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

  input GameResultInput {
    a: Int!
    b: Int!
    aPenalties: Int
    bPenalties: Int
  }

  input TeamInput {
    code: ID!
    name: String!
  }

  type Bet {
    id: ID!
    game: Game!
    gambler: Gambler!
    betNumbers: BetNumbers
    points: Int
  }

  type BetNumbers {
    a: Int!
    b: Int!
    winInPenalties: TeamAOrB
  }

  type Team {
    code: ID!
    name: String!
    group: String!
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
    bets: [Bet]!
  }

  type GameResult {
    a: Int!
    b: Int!
    aPenalties: Int
    bPenalties: Int
  }
`

export default typeDefs
