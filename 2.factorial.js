// const length = 0
const length = Math.floor(Math.random() * 100) + 1

function factorial(){
  let number = 1
  for (let i = length; i > 0; i--) {
    number *= i
  }
  return number
}

console.log('Number is: ' + length);
console.log('Factorial: ' +  factorial(length));
console.log('Big O = O(n)');

// ---------------------------------------

function factorialRecursive(n){
  if(n <= 1){
    return 1
  }
  return  n * factorialRecursive(n - 1)
}

console.log('Number is: ' + length);
console.log('Factorial with Recursive: ' + factorialRecursive(length));
console.log('Big O = O(n)');