const linearArray = []
for(let i = 0; i < Math.floor(Math.random() * 100) + 1; i++){
  linearArray.push(Math.floor(Math.random() * 100) + 1)
}

const number = Math.floor(Math.random() * 100) + 1

function linearSearch(){
  for(let i = 0; i < linearArray.length; i++){
    if(linearArray[i] === number){
      return i
    }
  }
  return -1
}

console.log('Array is: ' + linearArray);
console.log('Need to find: ' + number);
console.log("Answer is (index): " + linearSearch(linearArray, number));
console.log('Big O = O(n)');