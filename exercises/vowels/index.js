// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // solution 2 regex
  const vowels = /[aeiou]/gi;

  const a = str.match(vowels);

  return a ? a.length : 0;

  // solution 1
  // const vowels = ['a', 'e', 'i', 'o', 'u'];

  // return str
  //   .toLowerCase()
  //   .split('')
  //   .map((letter) => {
  //     return vowels.includes(letter);
  //   })
  //   .filter((n) => n).length;
}

module.exports = vowels;
