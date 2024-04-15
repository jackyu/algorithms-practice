// algorithms

// In Bubble Sort algorithm,
// traverse from left and compare adjacent elements and the higher one is placed at right side.
// In this way, the largest element is moved to the rightmost end at first.
// This process is then continued to find the second largest and place it and so on until the data is sorted.

const inputs = [1, 5, 7, 3, 9, 2, 4, 6, 8, 0];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(inputs)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
