/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // need to create a variable to hold the current lowest value
  // let lowestValue = Infinity;
  let lowestValue = arr[0];

  // look through all the numbers
  for (const num of arr) {
    // is the current number lower than our lowest value seen so far?
    if (num < lowestValue) {
      // if yes, replace the lowest value with the current number
      lowestValue = num;
    }
  }

  // return the variable holding lowest number
  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // return Math.max(...arr);

  // create a variable to hold the highest seen so far
  let highestValue = arr[0];

  // loop through the arr
  for (const num of arr) {
    // if current value is higher than highest seen so far
    if (num > highestValue) {
      // replace highest with current value
      highestValue = num;
    }
  }

  // return the highest seen so far
  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  const difference = highest - lowest;
  
  return difference;
};

// Don't change below:

module.exports = { min, max, range };
