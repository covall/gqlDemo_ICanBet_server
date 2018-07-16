import { teams } from './teams'

const randomResult = (withPenalties = false) => {
  // random between 0 and 3
  const result = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
  if (withPenalties && result[0] === result[1]) {
    result.push(Math.floor(Math.random() * 2) + 1)
  }
  return result
}

const randomBets = () => {
  return {
    firstPlace: randomProperty(teams),
    secondPlace: randomProperty(teams),
    thirdPlace: randomProperty(teams),
    fourthPlace: randomProperty(teams),
    games: Array(64)
      .fill()
      .map((_, index) => ({ [index + 1]: randomResult(index + 1 > 48) }))
  }
}

const randomProperty = obj => {
  var keys = Object.keys(obj)
  return obj[keys[Math.floor(Math.random() * keys.length)]]
}

const players = [
  {
    nick: 'Kosa',
    bets: randomBets()
  },
  {
    nick: 'Michał K.'
  },
  {
    nick: 'Arek G.'
  },
  {
    nick: 'Kalbar'
  },
  {
    nick: 'Wujek Gaweł'
  },
  {
    nick: 'Kamil K'
  },
  {
    nick: 'Aga'
  },
  {
    nick: 'Maniek'
  },
  {
    nick: 'Paweł N.'
  },
  {
    nick: 'Hala Banacha'
  },
  {
    nick: 'Ewelina'
  },
  {
    nick: 'Cisu'
  },
  {
    nick: 'Kobiela'
  },
  {
    nick: 'Daniel W.'
  },
  {
    nick: 'Bohillo'
  },

  {
    nick: 'Kuba S.'
  },

  {
    nick: 'Paweł P.'
  },

  {
    nick: 'Konrad K.'
  },

  {
    nick: 'Radek'
  },

  {
    nick: 'MSzyk'
  },
  {
    nick: 'Paweł J.'
  },
  {
    nick: 'Gamrot'
  },
  {
    nick: 'DamianR'
  },
  {
    nick: 'Kuba "Szef"'
  },
  {
    nick: 'Elo',
    isBot: true
  },
  {
    nick: 'Consensus',
    isBot: true
  },
  {
    nick: 'Ensemble',
    isBot: true
  },
  {
    nick: 'Elo+1',
    isBot: true
  },
  {
    nick: 'Consensus+1',
    isBot: true
  },
  {
    nick: 'Ensemble+1',
    isBot: true
  },
  {
    nick: '538',
    isBot: true
  },
  {
    nick: 'Anty-Kuba',
    isBot: true
  }
]

export { players }
