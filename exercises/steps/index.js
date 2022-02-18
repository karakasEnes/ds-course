// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  /*

  loop over 0 to n rows
    create stairs = ""
    loop over 0 to n columns
      if col == row or col < row
        stairs += "#"

      else 
        stairs += " "
  */

  for (let row = 0; row < n; row++) {
    let stairs = '';
    for (let col = 0; col < n; col++) {
      if (col === row || col < row) {
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }

    console.log(stairs);
  }
}

module.exports = steps;
