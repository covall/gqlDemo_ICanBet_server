import { teams } from './teams'

const phases = Object.freeze({
  GROUP: 'Grupa',
  ONE_EIGHT: '1/8 finału',
  QUARTER_FINAL: 'Ćwierćfinał',
  SEMI_FINAL: 'Półfinał',
  THIRD_PLACE: 'Mecz o 3 miejsce',
  FINAL: 'Finał'
})

const games = [
  {
    id: 1,
    phase: phases.GROUP,
    date: '2018-06-14T00:00:00',
    teamA: teams.RUS,
    teamB: teams.SAU,
    result: [5, 0]
  },
  {
    id: 2,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: teams.EGY,
    teamB: teams.URY,
    result: [0, 1]
  },
  {
    id: 3,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: teams.MAR,
    teamB: teams.IRN,
    result: [0, 1]
  },
  {
    id: 4,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: teams.POR,
    teamB: teams.ESP,
    result: [3, 3]
  },
  {
    id: 5,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: teams.FRA,
    teamB: teams.AUS,
    result: [2, 1]
  },
  {
    id: 6,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: teams.ARG,
    teamB: teams.ICE,
    result: [1, 1]
  },
  {
    id: 7,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: teams.PER,
    teamB: teams.DNK,
    result: [0, 1]
  },
  {
    id: 8,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: teams.CRO,
    teamB: teams.NER,
    result: [2, 0]
  },
  {
    id: 9,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: teams.CRI,
    teamB: teams.SRB,
    result: [0, 1]
  },
  {
    id: 10,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: teams.GER,
    teamB: teams.MEX,
    result: [0, 1]
  },
  {
    id: 11,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: teams.BRA,
    teamB: teams.SWI,
    result: [1, 1]
  },
  {
    id: 12,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: teams.SWE,
    teamB: teams.KOR,
    result: [1, 0]
  },
  {
    id: 13,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: teams.BEL,
    teamB: teams.PAN,
    result: [3, 0]
  },
  {
    id: 14,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: teams.TUN,
    teamB: teams.ENG,
    result: [1, 2]
  },
  {
    id: 15,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: teams.COL,
    teamB: teams.JPN,
    result: [1, 2]
  },
  {
    id: 16,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: teams.POL,
    teamB: teams.SEN,
    result: [1, 2]
  },
  {
    id: 17,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: teams.RUS,
    teamB: teams.EGY,
    result: [3, 1]
  },
  {
    id: 18,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: teams.POR,
    teamB: teams.MAR,
    result: [1, 0]
  },
  {
    id: 19,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: teams.URY,
    teamB: teams.SAU,
    result: [1, 0]
  },
  {
    id: 20,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: teams.IRN,
    teamB: teams.ESP,
    result: [0, 1]
  },
  {
    id: 21,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: teams.DNK,
    teamB: teams.AUS,
    result: [1, 1]
  },
  {
    id: 22,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: teams.FRA,
    teamB: teams.PER,
    result: [1, 0]
  },
  {
    id: 23,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: teams.ARG,
    teamB: teams.CRO,
    result: [0, 3]
  },
  {
    id: 24,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: teams.BRA,
    teamB: teams.CRI,
    result: [2, 0]
  },
  {
    id: 25,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: teams.NER,
    teamB: teams.ICE,
    result: [2, 0]
  },
  {
    id: 26,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: teams.SRB,
    teamB: teams.SWI,
    result: [1, 2]
  },
  {
    id: 27,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: teams.BEL,
    teamB: teams.TUN,
    result: [5, 2]
  },
  {
    id: 28,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: teams.KOR,
    teamB: teams.MEX,
    result: [1, 2]
  },
  {
    id: 29,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: teams.GER,
    teamB: teams.SWE,
    result: [2, 1]
  },
  {
    id: 30,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: teams.ENG,
    teamB: teams.PAN,
    result: [6, 1]
  },
  {
    id: 31,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: teams.JPN,
    teamB: teams.SEN,
    result: [2, 2]
  },
  {
    id: 32,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: teams.POL,
    teamB: teams.COL,
    result: [0, 3]
  },
  {
    id: 33,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: teams.SAU,
    teamB: teams.EGY,
    result: [2, 1]
  },
  {
    id: 34,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: teams.URY,
    teamB: teams.RUS,
    result: [3, 0]
  },
  {
    id: 35,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: teams.IRN,
    teamB: teams.POR,
    result: [1, 1]
  },
  {
    id: 36,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: teams.ESP,
    teamB: teams.MAR,
    result: [2, 2]
  },

  {
    id: 37,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: teams.AUS,
    teamB: teams.PER,
    result: [0, 2]
  },
  {
    id: 38,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: teams.DNK,
    teamB: teams.FRA,
    result: [0, 0]
  },
  {
    id: 39,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: teams.NER,
    teamB: teams.ARG,
    result: [1, 2]
  },
  {
    id: 40,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: teams.ICE,
    teamB: teams.CRO,
    result: [1, 2]
  },

  {
    id: 41,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.MEX,
    teamB: teams.SWE,
    result: [0, 3]
  },
  {
    id: 42,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.KOR,
    teamB: teams.GER,
    result: [2, 0]
  },
  {
    id: 43,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.SWI,
    teamB: teams.CRI,
    result: [2, 2]
  },
  {
    id: 44,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.SRB,
    teamB: teams.BRA,
    result: [0, 2]
  },

  {
    id: 45,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.SEN,
    teamB: teams.COL,
    result: [0, 1]
  },
  {
    id: 46,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.JPN,
    teamB: teams.POL,
    result: [0, 1]
  },
  {
    id: 47,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.ENG,
    teamB: teams.BEL,
    result: [0, 1]
  },
  {
    id: 48,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: teams.PAN,
    teamB: teams.TUN,
    result: [1, 2]
  },

  {
    id: 49,
    phase: phases.ONE_EIGHT,
    date: '2018-06-30T00:00:00',
    teamA: teams.FRA,
    teamB: teams.ARG,
    result: [4, 3]
  },
  {
    id: 50,
    phase: phases.ONE_EIGHT,
    date: '2018-06-30T00:00:00',
    teamA: teams.URY,
    teamB: teams.POR,
    result: [2, 1]
  },
  {
    id: 51,
    phase: phases.ONE_EIGHT,
    date: '2018-07-01T00:00:00',
    teamA: teams.ESP,
    teamB: teams.RUS,
    result: [1, 1],
    penalties: [3, 4]
  },
  {
    id: 52,
    phase: phases.ONE_EIGHT,
    date: '2018-07-01T00:00:00',
    teamA: teams.CRO,
    teamB: teams.DNK,
    result: [1, 1],
    penalties: [3, 2]
  },
  {
    id: 53,
    phase: phases.ONE_EIGHT,
    date: '2018-07-02T00:00:00',
    teamA: teams.BRA,
    teamB: teams.MEX,
    result: [2, 0]
  },
  {
    id: 54,
    phase: phases.ONE_EIGHT,
    date: '2018-07-02T00:00:00',
    teamA: teams.BEL,
    teamB: teams.JPN,
    result: [3, 2]
  },
  {
    id: 55,
    phase: phases.ONE_EIGHT,
    date: '2018-07-03T00:00:00',
    teamA: teams.SWE,
    teamB: teams.SWI,
    result: [1, 0]
  },
  {
    id: 56,
    phase: phases.ONE_EIGHT,
    date: '2018-07-03T00:00:00',
    teamA: teams.COL,
    teamB: teams.ENG,
    result: [1, 1],
    penalties: [3, 4]
  },

  {
    id: 57,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-06T00:00:00',
    teamA: teams.URY,
    teamB: teams.FRA,
    result: [0, 2]
  },
  {
    id: 58,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-06T00:00:00',
    teamA: teams.BRA,
    teamB: teams.BEL,
    result: [1, 2]
  },
  {
    id: 59,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-07T00:00:00',
    teamA: teams.SWE,
    teamB: teams.ENG,
    result: [0, 2]
  },
  {
    id: 60,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-07T00:00:00',
    teamA: teams.RUS,
    teamB: teams.CRO,
    result: [2, 2],
    penalties: [3, 4]
  },

  {
    id: 61,
    phase: phases.SEMI_FINAL,
    date: '2018-07-10T00:00:00',
    teamA: teams.FRA,
    teamB: teams.BEL,
    result: [1, 0]
  },
  {
    id: 62,
    phase: phases.SEMI_FINAL,
    date: '2018-07-11T00:00:00',
    teamA: teams.CRO,
    teamB: teams.ENG,
    result: [2, 1]
  },

  {
    id: 63,
    phase: phases.THIRD_PLACE,
    date: '2018-07-14T00:00:00',
    teamA: teams.BEL,
    teamB: teams.ENG
  },
  {
    id: 64,
    phase: phases.FINAL,
    date: '2018-07-15T00:00:00',
    teamA: teams.CRO,
    teamB: teams.ENG
  }
]

export { games }
