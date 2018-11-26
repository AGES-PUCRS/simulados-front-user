const numerals = [
  '',
  'C',
  'CC',
  'CCC',
  'CD',
  'D',
  'DC',
  'DCC',
  'DCCC',
  'CM',
  '',
  'X',
  'XX',
  'XXX',
  'XL',
  'L',
  'LX',
  'LXX',
  'LXXX',
  'XC',
  '',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
]

const romanize = num => {
  if (isNaN(num)) return NaN

  const digits = String(+num).split('')
  let roman = ''
  let i = 3

  while (i--) roman = (numerals[+digits.pop() + i * 10] || '') + roman

  return Array(+digits.join('') + 1).join('M') + roman
}

export default romanize
