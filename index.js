function add(a,b) {
  return a + b
}

function subtract(a,b) {
  return a - b
}

function divide(a,b) {
  return a / b
}

function multiply(a,b) {
  return a * b
}

function increment(n) {
  return n += 1
}

function decrement(n) {
  return n -= 1
}

function makeInt(string) {
  return parseInt(string, 10)
}

function preserveDecimal(string) {
  return parseFloat(string)
}

//basic operations
console.log(add(5,7));
console.log(subtract(5,7));
console.log(multiply(5,7));
console.log(divide(5,7));

//increment / decrement
 console.log(increment(100));
 console.log(decrement(100));

//parseInt and parseFloat
  console.log(makeInt("1258.3525"));
  console.log(preserveDecimal("1258.3525"));
  