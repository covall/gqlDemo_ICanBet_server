const teams = [
  // A
  { group: 'A', code: 'RUS', name: 'Rosja' },
  { group: 'A', code: 'SAU', name: 'Arabia Saudyjska' },
  { group: 'A', code: 'EGY', name: 'Egipt' },
  { group: 'A', code: 'URY', name: 'Urugwaj' },
  // B
  { group: 'B', code: 'MAR', name: 'Maroko' },
  { group: 'B', code: 'IRN', name: 'Iran' },
  { group: 'B', code: 'POR', name: 'Portugalia' },
  { group: 'B', code: 'ESP', name: 'Hiszpania' },
  // C
  { group: 'C', code: 'FRA', name: 'Francja' },
  { group: 'C', code: 'AUS', name: 'Australia' },
  { group: 'C', code: 'PER', name: 'Peru' },
  { group: 'C', code: 'DNK', name: 'Dania' },
  // D
  { group: 'D', code: 'ARG', name: 'Argentyna' },
  { group: 'D', code: 'ICE', name: 'Islandia' },
  { group: 'D', code: 'CRO', name: 'Chorwacja' },
  { group: 'D', code: 'NER', name: 'Nigeria' },
  // E
  { group: 'E', code: 'CRI', name: 'Kostaryka' },
  { group: 'E', code: 'SRB', name: 'Serbia' },
  { group: 'E', code: 'BRA', name: 'Brazylia' },
  { group: 'E', code: 'SWI', name: 'Szwajcaria' },
  // F
  { group: 'F', code: 'GER', name: 'Niemcy' },
  { group: 'F', code: 'MEX', name: 'Meksyk' },
  { group: 'F', code: 'SWE', name: 'Szwecja' },
  { group: 'F', code: 'KOR', name: 'Korea Południowa' },
  // G
  { group: 'G', code: 'BEL', name: 'Belgia' },
  { group: 'G', code: 'PAN', name: 'Panama' },
  { group: 'G', code: 'TUN', name: 'Tunezja' },
  { group: 'G', code: 'ENG', name: 'Anglia' },
  // H
  { group: 'H', code: 'COL', name: 'Kolumbia' },
  { group: 'H', code: 'JPN', name: 'Japonia' },
  { group: 'H', code: 'POL', name: 'Polska' },
  { group: 'H', code: 'SEN', name: 'Senegal' }
]

const getTeam = code => teams.find(t => t.code === code)

export { getTeam, teams }
