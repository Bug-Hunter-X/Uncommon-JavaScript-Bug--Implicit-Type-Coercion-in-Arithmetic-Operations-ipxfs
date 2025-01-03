//This is a solution for the bug
function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a and b must be numbers');
  }
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar('2', 3)); // Throws an error because of input validation