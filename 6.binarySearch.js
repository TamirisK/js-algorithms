const binaryArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const number = 7

function binarySearch(){
  let leftIndex = 0
  let rightIndex = binaryArray.length - 1
  
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (number === binaryArray[middleIndex]) {
      return middleIndex
    }
    if (number < binaryArray[middleIndex]){
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log('This is sorted array: ' + binaryArray);
console.log('Need to find: ' + number);
console.log('Answer is (index): ' + binarySearch());
console.log('Big O = O(logn)');

// ---------------------------------------

function binarySearchRecursive(arr, num){
  return search(arr, num, 0, arr.length - 1)
}

function search(arr, num, leftIndex, rightIndex){
  if (leftIndex > rightIndex) {
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (num === arr[middleIndex]) {
    return middleIndex
  }

  if(num < arr[middleIndex]){
    return search(arr, num, leftIndex, middleIndex - 1)
  } else {
    return search(arr, num, middleIndex + 1, rightIndex)
  }
}

console.log('This is sorted array: ' + binaryArray);
console.log('Need to find: ' + number);
console.log('Answer with recursive is (index): ' + binarySearchRecursive(binaryArray, number));
console.log('Big O = O(logn)');

// ---------------------------------------