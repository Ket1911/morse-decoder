const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
      
  let n = expr.length / 10;
  let result = '';
  
  for (let i = 0; i < n; i++) {
    let a = '';
    for (let j = i * 10; j < (i + 1) * 10 ; j++) {
      a = a + expr[j];
    }
    let b = a.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
    if (b === ' ') {
      result = result + ' ';
    } else {
      result = result + MORSE_TABLE[b];
    }
    
  }
  return result;
}

module.exports = {
    decode
}