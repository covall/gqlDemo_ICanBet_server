import { getTeam } from './teams'

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
    teamA: getTeam('RUS'),
    teamB: getTeam('SAU'),
    result: [5, 0]
  },
  {
    id: 2,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: getTeam('EGY'),
    teamB: getTeam('URY'),
    result: [0, 1]
  },
  {
    id: 3,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: getTeam('MAR'),
    teamB: getTeam('IRN'),
    result: [0, 1]
  },
  {
    id: 4,
    phase: phases.GROUP,
    date: '2018-06-15T00:00:00',
    teamA: getTeam('PRT'),
    teamB: getTeam('ESP'),
    result: [3, 3]
  },
  {
    id: 5,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: getTeam('FRA'),
    teamB: getTeam('AUS'),
    result: [2, 1]
  },
  {
    id: 6,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: getTeam('ARG'),
    teamB: getTeam('ISL'),
    result: [1, 1]
  },
  {
    id: 7,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: getTeam('PER'),
    teamB: getTeam('DNK'),
    result: [0, 1]
  },
  {
    id: 8,
    phase: phases.GROUP,
    date: '2018-06-16T00:00:00',
    teamA: getTeam('HRV'),
    teamB: getTeam('NER'),
    result: [2, 0]
  },
  {
    id: 9,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: getTeam('CRI'),
    teamB: getTeam('SRB'),
    result: [0, 1]
  },
  {
    id: 10,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: getTeam('DEU'),
    teamB: getTeam('MEX'),
    result: [0, 1]
  },
  {
    id: 11,
    phase: phases.GROUP,
    date: '2018-06-17T00:00:00',
    teamA: getTeam('BRA'),
    teamB: getTeam('CHE'),
    result: [1, 1]
  },
  {
    id: 12,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: getTeam('SWE'),
    teamB: getTeam('KOR'),
    result: [1, 0]
  },
  {
    id: 13,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: getTeam('BEL'),
    teamB: getTeam('PAN'),
    result: [3, 0]
  },
  {
    id: 14,
    phase: phases.GROUP,
    date: '2018-06-18T00:00:00',
    teamA: getTeam('TUN'),
    teamB: getTeam('GB-ENG'),
    result: [1, 2]
  },
  {
    id: 15,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: getTeam('COL'),
    teamB: getTeam('JPN'),
    result: [1, 2]
  },
  {
    id: 16,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: getTeam('POL'),
    teamB: getTeam('SEN'),
    result: [1, 2]
  },
  {
    id: 17,
    phase: phases.GROUP,
    date: '2018-06-19T00:00:00',
    teamA: getTeam('RUS'),
    teamB: getTeam('EGY'),
    result: [3, 1]
  },
  {
    id: 18,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: getTeam('PRT'),
    teamB: getTeam('MAR'),
    result: [1, 0]
  },
  {
    id: 19,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: getTeam('URY'),
    teamB: getTeam('SAU'),
    result: [1, 0]
  },
  {
    id: 20,
    phase: phases.GROUP,
    date: '2018-06-20T00:00:00',
    teamA: getTeam('IRN'),
    teamB: getTeam('ESP'),
    result: [0, 1]
  },
  {
    id: 21,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: getTeam('DNK'),
    teamB: getTeam('AUS'),
    result: [1, 1]
  },
  {
    id: 22,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: getTeam('FRA'),
    teamB: getTeam('PER'),
    result: [1, 0]
  },
  {
    id: 23,
    phase: phases.GROUP,
    date: '2018-06-21T00:00:00',
    teamA: getTeam('ARG'),
    teamB: getTeam('HRV'),
    result: [0, 3]
  },
  {
    id: 24,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: getTeam('BRA'),
    teamB: getTeam('CRI'),
    result: [2, 0]
  },
  {
    id: 25,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: getTeam('NER'),
    teamB: getTeam('ISL'),
    result: [2, 0]
  },
  {
    id: 26,
    phase: phases.GROUP,
    date: '2018-06-22T00:00:00',
    teamA: getTeam('SRB'),
    teamB: getTeam('CHE'),
    result: [1, 2]
  },
  {
    id: 27,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: getTeam('BEL'),
    teamB: getTeam('TUN'),
    result: [5, 2]
  },
  {
    id: 28,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: getTeam('KOR'),
    teamB: getTeam('MEX'),
    result: [1, 2]
  },
  {
    id: 29,
    phase: phases.GROUP,
    date: '2018-06-23T00:00:00',
    teamA: getTeam('DEU'),
    teamB: getTeam('SWE'),
    result: [2, 1]
  },
  {
    id: 30,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: getTeam('GB-ENG'),
    teamB: getTeam('PAN'),
    result: [6, 1]
  },
  {
    id: 31,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: getTeam('JPN'),
    teamB: getTeam('SEN'),
    result: [2, 2]
  },
  {
    id: 32,
    phase: phases.GROUP,
    date: '2018-06-24T00:00:00',
    teamA: getTeam('POL'),
    teamB: getTeam('COL'),
    result: [0, 3]
  },
  {
    id: 33,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: getTeam('SAU'),
    teamB: getTeam('EGY'),
    result: [2, 1]
  },
  {
    id: 34,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: getTeam('URY'),
    teamB: getTeam('RUS'),
    result: [3, 0]
  },
  {
    id: 35,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: getTeam('IRN'),
    teamB: getTeam('PRT'),
    result: [1, 1]
  },
  {
    id: 36,
    phase: phases.GROUP,
    date: '2018-06-25T00:00:00',
    teamA: getTeam('ESP'),
    teamB: getTeam('MAR'),
    result: [2, 2]
  },

  {
    id: 37,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: getTeam('AUS'),
    teamB: getTeam('PER'),
    result: [0, 2]
  },
  {
    id: 38,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: getTeam('DNK'),
    teamB: getTeam('FRA'),
    result: [0, 0]
  },
  {
    id: 39,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: getTeam('NER'),
    teamB: getTeam('ARG'),
    result: [1, 2]
  },
  {
    id: 40,
    phase: phases.GROUP,
    date: '2018-06-26T00:00:00',
    teamA: getTeam('ISL'),
    teamB: getTeam('HRV'),
    result: [1, 2]
  },

  {
    id: 41,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('MEX'),
    teamB: getTeam('SWE'),
    result: [0, 3]
  },
  {
    id: 42,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('KOR'),
    teamB: getTeam('DEU'),
    result: [2, 0]
  },
  {
    id: 43,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('CHE'),
    teamB: getTeam('CRI'),
    result: [2, 2]
  },
  {
    id: 44,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('SRB'),
    teamB: getTeam('BRA'),
    result: [0, 2]
  },

  {
    id: 45,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('SEN'),
    teamB: getTeam('COL'),
    result: [0, 1]
  },
  {
    id: 46,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('JPN'),
    teamB: getTeam('POL'),
    result: [0, 1]
  },
  {
    id: 47,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('GB-ENG'),
    teamB: getTeam('BEL'),
    result: [0, 1]
  },
  {
    id: 48,
    phase: phases.GROUP,
    date: '2018-06-27T00:00:00',
    teamA: getTeam('PAN'),
    teamB: getTeam('TUN'),
    result: [1, 2]
  },

  {
    id: 49,
    phase: phases.ONE_EIGHT,
    date: '2018-06-30T00:00:00',
    teamA: getTeam('FRA'),
    teamB: getTeam('ARG'),
    result: [4, 3]
  },
  {
    id: 50,
    phase: phases.ONE_EIGHT,
    date: '2018-06-30T00:00:00',
    teamA: getTeam('URY'),
    teamB: getTeam('PRT'),
    result: [2, 1]
  },
  {
    id: 51,
    phase: phases.ONE_EIGHT,
    date: '2018-07-01T00:00:00',
    teamA: getTeam('ESP'),
    teamB: getTeam('RUS'),
    result: [1, 1],
    penalties: [3, 4]
  },
  {
    id: 52,
    phase: phases.ONE_EIGHT,
    date: '2018-07-01T00:00:00',
    teamA: getTeam('HRV'),
    teamB: getTeam('DNK'),
    result: [1, 1],
    penalties: [3, 2]
  },
  {
    id: 53,
    phase: phases.ONE_EIGHT,
    date: '2018-07-02T00:00:00',
    teamA: getTeam('BRA'),
    teamB: getTeam('MEX'),
    result: [2, 0]
  },
  {
    id: 54,
    phase: phases.ONE_EIGHT,
    date: '2018-07-02T00:00:00',
    teamA: getTeam('BEL'),
    teamB: getTeam('JPN'),
    result: [3, 2]
  },
  {
    id: 55,
    phase: phases.ONE_EIGHT,
    date: '2018-07-03T00:00:00',
    teamA: getTeam('SWE'),
    teamB: getTeam('CHE'),
    result: [1, 0]
  },
  {
    id: 56,
    phase: phases.ONE_EIGHT,
    date: '2018-07-03T00:00:00',
    teamA: getTeam('COL'),
    teamB: getTeam('GB-ENG'),
    result: [1, 1],
    penalties: [3, 4]
  },

  {
    id: 57,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-06T00:00:00',
    teamA: getTeam('URY'),
    teamB: getTeam('FRA'),
    result: [0, 2]
  },
  {
    id: 58,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-06T00:00:00',
    teamA: getTeam('BRA'),
    teamB: getTeam('BEL'),
    result: [1, 2]
  },
  {
    id: 59,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-07T00:00:00',
    teamA: getTeam('SWE'),
    teamB: getTeam('GB-ENG'),
    result: [0, 2]
  },
  {
    id: 60,
    phase: phases.QUARTER_FINAL,
    date: '2018-07-07T00:00:00',
    teamA: getTeam('RUS'),
    teamB: getTeam('HRV'),
    result: [2, 2],
    penalties: [3, 4]
  },

  {
    id: 61,
    phase: phases.SEMI_FINAL,
    date: '2018-07-10T00:00:00',
    teamA: getTeam('FRA'),
    teamB: getTeam('BEL'),
    result: [1, 0]
  },
  {
    id: 62,
    phase: phases.SEMI_FINAL,
    date: '2018-07-11T00:00:00',
    teamA: getTeam('HRV'),
    teamB: getTeam('GB-ENG'),
    result: [2, 1]
  },

  {
    id: 63,
    phase: phases.THIRD_PLACE,
    date: '2018-07-14T00:00:00',
    teamA: getTeam('BEL'),
    teamB: getTeam('GB-ENG'),
    result: [2, 0]
  },
  {
    id: 64,
    phase: phases.FINAL,
    date: '2018-07-15T00:00:00',
    teamA: getTeam('HRV'),
    teamB: getTeam('FRA'),
    result: [2, 4]
  }
]

const getGame = id => games.find(g => String(g.id) === String(id))

export { games, getGame }
