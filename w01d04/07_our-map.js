// map - returns an array that is the same length as the input array, but some or all of the elements are transformed in some way

const dogs = ['Oliver', 'Bogart', 'Aya', 'Dioji'];

const mappedDogs = dogs.map((dog) => {
  // if (dog[0] === 'A') {
  //   return `${dog} wants to sit on lap`;
  // }

  return dog;
});

console.log(dogs);
console.log(mappedDogs);

const ourMap = (arr, cb) => {
  // create an output array
  const output = [];

  // iterate through the provided array
  for (const element of arr) {
    // call the callback for each element
    const returnVal = cb(element);

    // take the return val of the callback and push it into the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const ourMappedDogs = ourMap(dogs, dog => `${dog} wants to sit on lap`);
console.log(ourMappedDogs);
