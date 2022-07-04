/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // "lighthouse in the house" { '6': 1, i: 2, g: 1 }

  // create the piles
  // create a variable to hold our "piles"
  const piles = {};

  // look at each number
  for (const num of arr) {
    // have we seen this number before?
    if (piles[num]) {
      // if yes, add to the current "pile"
      piles[num] += 1;
    } else {
      // if no, create a new "pile"
      piles[num] = 1;
    }
  }

  // console.log(arr);
  // console.log(piles);

  // check which pile is tallest

  // create 2 variables to hold the highest value seen and the key assoc with that value
  let highestValue = 0;
  let highestKey = null;

  // loop through our piles
  for (const pileKey in piles) {
    const value = piles[pileKey];

    // is this value higher than our highest seen so far?
    if (value > highestValue) {
      // if yes, update the highest seen so far AND the highest key
      highestValue = value;
      highestKey = pileKey;
    }
  }

  // return the highest key
  return Number(highestKey);
};

// Don't change below:
module.exports = { mode };
