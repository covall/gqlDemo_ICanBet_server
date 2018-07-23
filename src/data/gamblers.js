const randomResult = ({ withPenalties = false }) => {
  // [1, 2] - result 1 : 2
  // [2, 2, 1] - restult 2 : 2 and firs team won in penalties
  // random between 0 and 3
  const result = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
  if (withPenalties && result[0] === result[1]) {
    result.push(Math.floor(Math.random() * 2) + 1)
  }
  return result
}

const gamblerWithRandomBets = gamblerId => {
  return {
    nick: gamblerId,
    bets: Array(64)
      .fill()
      .map((_, index) => ({
        gamblerId,
        gameId: index + 1,
        betNumbers: randomResult({ withPenalties: index + 1 > 48 })
      }))
  }
}

const getGambler = gamblerId => gamblers.find(gambler => gambler.nick === gamblerId)

const gamblers = [
  gamblerWithRandomBets('Kosa'),
  gamblerWithRandomBets('Michał K.'),
  gamblerWithRandomBets('Arek G.'),
  gamblerWithRandomBets('Kalbar'),
  gamblerWithRandomBets('Wujek Gaweł'),
  gamblerWithRandomBets('Kamil K'),
  gamblerWithRandomBets('Aga'),
  gamblerWithRandomBets('Maniek'),
  gamblerWithRandomBets('Paweł N.'),
  gamblerWithRandomBets('Hala Banacha'),
  gamblerWithRandomBets('Ewelina'),
  gamblerWithRandomBets('Cisu'),
  gamblerWithRandomBets('Kobiela'),
  gamblerWithRandomBets('Daniel W.'),
  gamblerWithRandomBets('Bohillo'),
  gamblerWithRandomBets('Kuba S.'),
  gamblerWithRandomBets('Paweł P.'),
  gamblerWithRandomBets('Konrad K.'),
  gamblerWithRandomBets('Radek'),
  gamblerWithRandomBets('MSzyk'),
  gamblerWithRandomBets('Paweł J.'),
  gamblerWithRandomBets('Gamrot'),
  gamblerWithRandomBets('DamianR'),
  gamblerWithRandomBets('Kuba "Szef"')
]

export { gamblers, getGambler }
