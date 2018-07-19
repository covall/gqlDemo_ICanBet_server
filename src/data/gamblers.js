const randomResult = (withPenalties = false) => {
  // random between 0 and 3
  const result = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
  if (withPenalties && result[0] === result[1]) {
    result.push(Math.floor(Math.random() * 2) + 1)
  }
  return result
}

const randomBets = () => {
  return Array(64)
    .fill()
    .map((_, index) => ({ gameId: index + 1, betNumbers: randomResult(index + 1 > 48) }))
}

const getGambler = gamblerId => gamblers.find(gambler => gambler.nick === gamblerId)

const gamblers = [
  {
    nick: 'Kosa',
    bets: randomBets()
  },
  {
    nick: 'Michał K.',
    bets: randomBets()
  },
  {
    nick: 'Arek G.',
    bets: randomBets()
  },
  {
    nick: 'Kalbar',
    bets: randomBets()
  },
  {
    nick: 'Wujek Gaweł',
    bets: randomBets()
  },
  {
    nick: 'Kamil K',
    bets: randomBets()
  },
  {
    nick: 'Aga',
    bets: randomBets()
  },
  {
    nick: 'Maniek',
    bets: randomBets()
  },
  {
    nick: 'Paweł N.',
    bets: randomBets()
  },
  {
    nick: 'Hala Banacha',
    bets: randomBets()
  },
  {
    nick: 'Ewelina',
    bets: randomBets()
  },
  {
    nick: 'Cisu',
    bets: randomBets()
  },
  {
    nick: 'Kobiela',
    bets: randomBets()
  },
  {
    nick: 'Daniel W.',
    bets: randomBets()
  },
  {
    nick: 'Bohillo',
    bets: randomBets()
  },

  {
    nick: 'Kuba S.',
    bets: randomBets()
  },

  {
    nick: 'Paweł P.',
    bets: randomBets()
  },

  {
    nick: 'Konrad K.',
    bets: randomBets()
  },

  {
    nick: 'Radek',
    bets: randomBets()
  },

  {
    nick: 'MSzyk',
    bets: randomBets()
  },
  {
    nick: 'Paweł J.',
    bets: randomBets()
  },
  {
    nick: 'Gamrot',
    bets: randomBets()
  },
  {
    nick: 'DamianR',
    bets: randomBets()
  },
  {
    nick: 'Kuba "Szef"',
    bets: randomBets()
  }
]

export { gamblers, getGambler }
