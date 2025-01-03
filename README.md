# Uncommon JavaScript Bug: Implicit Type Coercion

This repository demonstrates a subtle bug in JavaScript related to implicit type coercion in arithmetic operations.  The `foo` function adds two numbers, but it lacks input validation. This can lead to unexpected behavior or errors if non-numeric values are passed in.

## The Bug

The original `foo` function implicitly attempts type coercion.  If you pass non-numeric values, JavaScript will try to convert them to numbers, which may or may not work as intended, often resulting in `NaN` (Not a Number) or unexpected results.  The improved version adds explicit input validation to prevent these issues.

## The Solution

The solution involves adding input validation to the `foo` function. This ensures that the inputs are indeed numbers before attempting the addition, thus preventing errors and ensuring predictable behavior.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor. 
3. Run the `bug.js` file in a JavaScript environment (Node.js or a browser's console) to observe the original, buggy behavior.
4. Run the `bugSolution.js` file to see the corrected behavior.

## Lessons Learned

This example highlights the importance of explicit input validation in JavaScript and avoiding reliance on implicit type coercion, which can lead to unexpected behavior and bugs.  Always validate your inputs to ensure your functions handle various scenarios gracefully. 