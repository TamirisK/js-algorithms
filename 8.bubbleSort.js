const bubbleArray = []
for(let i = 0; i < Math.floor(Math.random() * 100) + 1; i++){
  bubbleArray.push(Math.floor(Math.random() * 100) + 1)
}

function bubbleSort (bubbleArray){
  for (let i = 0; i < bubbleArray.length-1; i++) {
    // console.log('i: ' + i);
    for (let j = 0; j < bubbleArray.length-1-i; j++) {
      // console.log('j: ' + j);
      if (bubbleArray[j] > bubbleArray[j+1]) {
        const temp = bubbleArray[j];
        bubbleArray[j] = bubbleArray[j+1];
        bubbleArray[j+1] = temp;        
      }
    }
  }
  return bubbleArray;
}

console.log("Original array: " + bubbleArray);
let sortedArray = bubbleSort(bubbleArray);
console.log("Sorted array: " + sortedArray);