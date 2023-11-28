// const length = 2
const length = Math.floor(Math.random() * 100) + 1

function fibonacci(){
  const fibonacciArray = []
  for(let i = 0; i < length; i++){
    if(i === 0 || i === 1){
      fibonacciArray.push(i)
    }
    else{
      fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2]
      console.log(fibonacciArray[i]);
    }
  }
  return fibonacciArray
}

console.log('Number is: ' + length);
console.log('Fibonacci: ' + fibonacci(length));
console.log('Big O = O(n)');

// ---------------------------------------

function fibonacciRecursive(n) {
  if(n < 2){
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log('Number is: ' + length);
console.log('Fibonacci with Recursive: ' + fibonacciRecursive(length));
console.log('Big O = O(2^n)');