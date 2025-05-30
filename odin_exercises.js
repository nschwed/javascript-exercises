
/**
 * Prompts the user to enter a number and parses the input as an integer.
 * @type {number}
 * @description The upper limit number entered by the user for the FizzBuzz sequence.
 */
let answer = parseInt(prompt("Please enter the number you would like FizzBuzz to go up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
const a = "Hello";
const b = "World";

console.log(c);