/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // return arr.reduce((accumulator, currentVal) => {
  //   const newAccumulator = accumulator + currentVal;
  //   return newAccumulator;
  // }, 0);

  return arr.reduce((a, c) => a + c, 0);

  // create a variable to hold our running total
  let runningTotal = 0;

  // console.log('arr', arr);

  // look at every number; loop
  for (const num of arr) {
    // take the current number and add it to the running total
    // console.log('num', num);
    runningTotal += num;
    // runningTotal = runningTotal + num;
  }

  // return the running total
  return runningTotal;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// 3.1415
// 314.15
// 314
// 3.14

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  // average = sum / numOfElements
  const numOfElements = count(arr);
  const total = sum(arr);

  const answer = total / numOfElements;

  const rounded = round(answer);

  return rounded;

  // return round(answer);
};

// Don't change below:
module.exports = { count, sum, mean };
