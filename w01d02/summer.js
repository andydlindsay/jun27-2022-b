// Problem:
// Write a program that takes in an unlimited number
// of command line arguments and prints out the sum
// of them. If any argument is not a whole number,
// skip it. Do not support negative numbers.

// console.log(process.argv);

const arguments = process.argv;

// arguments.shift();
// arguments.shift();

// arguments[0] = undefined;
// arguments[1] = undefined;

// delete arguments[0];

// arguments.splice(0, 2);

const sliced = arguments.slice(2);

// console.log(sliced);
// console.log(process.argv);

const hardcodedArr = [ '5', '10', '15', '3.14', '-100' ];

// prints out the sum of them

// a variable to hold our running total
let runningTotal = 0;

// loop through the array: c-style, forEach, for..of, for..in
for (let i = 0; i < hardcodedArr.length; i++) {
  const element = hardcodedArr[i]; // '15'

  // casting the element to a number
  const number = Number(element); // 15

  // ask if the number is a whole number and ask if it is above zero
  if (Number.isInteger(number) && number > 0) {
    // += each element of the array onto the running total
    runningTotal += number;
  }
}

console.log('runningTotal', runningTotal);
// console.log(`runningTotal ${['a', 'b', 'c']}`);
