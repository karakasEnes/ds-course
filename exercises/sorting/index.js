// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let lenArr = arr.length;
  for (let i = 0; i < lenArr; i++) {
    for (let j = 0; j < lenArr - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let lenArr = arr.length;
  for (let i = 0; i < lenArr; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < lenArr; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (arr[indexOfMin] === arr[i]) continue;
    let temp = arr[i];
    arr[i] = arr[indexOfMin];
    arr[indexOfMin] = temp;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      results.push(right.shift());
    } else {
      results.push(left.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
