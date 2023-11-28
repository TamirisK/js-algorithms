const quickArray = []
for(let i = 0; i < Math.floor(Math.random() * 100) + 1; i++){
  quickArray.push(Math.floor(Math.random() * 100) + 1)
}

function quickSort (quickArray){
  if (quickArray.length < 2) { 
		return quickArray;
	} else {
    let pivot = quickArray[quickArray.length-1]
    let left = []
    let right = []
    let newArray = []
    // console.log('Pivot is: ' + pivot)
    for(let i = 0; i < quickArray.length-1; i++){
      quickArray[i] <= pivot ? left.push(quickArray[i]) : right.push(quickArray[i])
    }
    // console.log(left)
    // console.log(left + ',' + right)
    return newArray.concat(quickSort(left), pivot, quickSort(right));
  }
}

console.log("Original array: " + quickArray);
let sortedArray = quickSort(quickArray);
console.log("Sorted array: " + sortedArray);