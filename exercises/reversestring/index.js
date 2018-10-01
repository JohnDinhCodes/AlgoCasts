// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('')
// }

// function reverse(str) {
//     return str
//     .split('')
//     .reduce((rev, char) => rev = char + rev)
// }

function reverse(str) {
    let res = '';
    for (let char of str) {
        res = char + res;
        debugger;
    }
    return res;
}

reverse('hello');


module.exports = reverse;
