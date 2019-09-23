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

function getLetter(expr) {
    if(expr[0] == '*') {
        return ' ';
    }

    let regexpPos = 0;//expr.search('/1*/');
    for(; regexpPos < expr.length && expr[regexpPos] != '1'; regexpPos++);
    
    expr = expr.substr(regexpPos, expr.length - regexpPos);

    let res = '';
    
    for(let i = 0; i < expr.length; i += 2) {
        if(expr.substr(i, 2) == '10') {
            res += '.';
        } else if(expr.substr(i, 2) == '11') {
            res += '-';
        }
    }

    return MORSE_TABLE[res];
}

function decode(expr) {
    res = '';
    for(let i = 0; i < expr.length; i += 10) {
        let sub = expr.substr(i, 10);
        res += getLetter(sub);
    }
    return res;
}

module.exports = {
    decode
}