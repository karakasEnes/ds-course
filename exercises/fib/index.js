// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memorize solution!

function memorize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const r = fn.apply(this, args);
    //alternatives
    // const r = fn.call(this, ...args);
    // const r = fn(...args);

    cache[args] = r;

    return r;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memorize(slowFib);

//solution recursive!
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// //solution iteration!
// function fib(n) {
//   const arr = [0, 1];
//   if (n === 0 || n === 1) {
//     return arr[n];
//   }

//   for (let i = 2; i < n + 1; i++) {
//     const genN = arr[i - 1] + arr[i - 2];
//     arr.push(genN);
//   }

//   return arr[n];
// }

module.exports = fib;
