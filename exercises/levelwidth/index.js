// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) return;

  let stop = 's';
  let counters = [0];

  let arr = [root, stop];

  while (arr.length > 1) {
    let firstElem = arr.shift();

    if (firstElem === stop) {
      counters.push(0);
      arr.push(stop);
    } else {
      arr.push(...firstElem.children);
      counters[counters.length - 1] = counters[counters.length - 1] + 1;
    }
  }

  return counters;
}

module.exports = levelWidth;
