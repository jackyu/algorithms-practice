// algorithms

// Find second max number in integer array

const inputs = [1, 5, 7, 3, 9, 2, 4, 6, 8, 0];

const findSecondMaxNumber = (arr) => {
  let max = arr[0];
  let secondMax = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

console.log(findSecondMaxNumber(inputs)); // 8