// algorithms

// QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot
// and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

const inputs = [1, 5, 7, 3, 9, 2, 4, 6, 8, 0];


// Quick Sort algorithm - O(n^2)
const quickSortV1 = function (arr) {
  // 遞迴結束條件
  if (arr.length <= 1) {
    return arr;
  }
  // 找出軸心，以數列中間的數值為軸心
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  // 定義左右陣列
  var left = [];
  var right = [];
  // 將小於軸心的數值放入左陣列，大於軸心的數值放入右陣列
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  // 遞迴呼叫，組合左陣列、軸心值、右陣列
  return quickSort(left).concat([pivot], quickSort(right));
};

console.log(quickSortV1(inputs)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Quick Sort algorithm - O(n log n)
const partition = function(array, low, high) {
  let pivot = array[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  [array[i], array[high]] = [array[high], array[i]];
  return i;
}
const quickSort2 = function (array, low, high) {
  if (low < high) {
    let pi = partition(array, low, high);
    quickSort2(array, low, pi - 1);
    quickSort2(array, pi + 1, high);
  }

  return array;
};

console.log(quickSortV2(data, 0, data.length - 1));  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

