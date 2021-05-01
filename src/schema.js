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
    editGameResult(id: ID!, resultInput: GameResultInput!): Game
    makeBet(gameId: ID!, gamblerId: ID!, betInput: BetInput!): Bet
    addGameResult(
      phase: String!
      date: String!
      teamA: ID!
      teamB: ID!
      resultInput: GameResultInput!
    ): Game
  }

  """
  Type Game represents a match with result
  """
  type Game {
    id: ID!
    """
    Phase of game can be the following values:
    1. "Grupa" - group
    2. "1/8 finału" - round of 16,
    3. "Ćwierćfinał" - quarter-final,
    4. "Półfinał" - semi-final
    5. "Finał" - final
    """
    phase: String!
    date: String!
    teamA: Team!
    teamB: Team!
    result: GameResult
    bets: [Bet]!
  }

  """
  Type Team represents a team
  """
  type Team {
    code: ID!
    name: String!
    group: String!
  }

  enum TeamAOrB {
    A
    B
  }

  """
  Input parameters - making bet
  """
  input BetInput {
    a: Int!
    b: Int!
    winInPenalties: TeamAOrB
  }

  """
  Input parameters - edit game result
  """
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

  """
  Type Bet represents a gambler's **bet**
  """
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

  """
  Type Gambler represents a **gambler**, who bets matches
  """
  type Gambler {
    id: ID!
    name: String!
    bets: [Bet]!
    points: Int!
    place: Int!
  }

  """
  Type GameResult represents a **game result**
  """
  type GameResult {
    """
    First team result
    """
    a: Int!
    """
    Second team result
    """
    b: Int!
    """
    First team penalty kicks result
    """
    aPenalties: Int
    """
    First team penalty kicks result
    """
    bPenalties: Int
  }
`

export default typeDefs
