// algorithms
// Find max number in integer array

const inputs = [1, 5, 7, 3, 9, 2, 4, 6, 8, 0];

const findMaxNumber = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMaxNumber(inputs)); // 9