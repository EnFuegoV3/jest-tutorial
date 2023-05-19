export function sum(a, b) {
    return a + b;
}

export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverse(word) {
    return word.split('').reverse().join('');
}

const add = (a,b) => {return a+b};
const sub = (a,b) => {return a-b};
const multiply = (a,b) => {return a*b};
const divide = (a,b) => {return a/b};

export const calc = {
    add,
    sub,
    multiply,
    divide
}

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlpha = "";

function shift(n) {
    for(let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newAlpha += alphabet[offset];
    }
    
}

export function caesarCipher(word, a) {
    shift(a);
    let result = "";
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
        let index = alphabet.indexOf(word[i]);
        if(index > -1){
        result += newAlpha[index];
        } else {
            result += ' ';
        }
    }
    return result;
}



