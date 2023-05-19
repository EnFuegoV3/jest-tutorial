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

