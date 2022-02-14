// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // const remainder = array.length % size
  // const other = array.length / size

  //solution1

  const chunked = [];

  for (const char of array) {
    let lastItem = chunked[chunked.length - 1];

    if (!lastItem || lastItem.length === size) {
      chunked.push([char]);
    } else {
      lastItem.push(char);
    }
  }

  return chunked;
}

module.exports = chunk;
