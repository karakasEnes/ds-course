// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }
  return reversed;

  // return str.split('').reduce((acc, curV) => curV + acc);
}

module.exports = reverse;
