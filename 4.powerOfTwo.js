// const length = 0
const length = Math.floor(Math.random() * 100) + 1

function powerOfTwo(){
  let number = 1
  for (let i = 1; i <= length; i++) {
    number *= 2
  }
  return number
}

console.log('Number is ' + length);
console.log('Power of two: ' + powerOfTwo(length));

// ---------------------------------------

function isPowerOfTwo(n){
  if(n < 1){
    return false
  }
  while(n > 1){
    if(n % 2 !== 0){
      return false
    }
    n /= 2
  }
  return true
}

console.log('Number is ' + length);
console.log('Is power of two?: ' + isPowerOfTwo(length))
console.log('Big O = O(logn)');

// ---------------------------------------

function isPowerOfTwoBitwise(n){
  if(n < 1){
    return false
  }
  return (n & (n-1)) === 0
}

console.log('Number is ' + length);
console.log('Is power of two with Bitwise?: ' + isPowerOfTwoBitwise(length))
console.log('Big O = O(1)');