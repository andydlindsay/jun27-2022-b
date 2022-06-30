// filter -- when we want a subset of an array (some values, but not all)

const dogs = ['Oliver', 'Bogart', 'Aya', 'Dioji'];

const ourCallback = dog => dog[0] === 'O';

const filteredDogs = dogs.filter(ourCallback);

// console.log(dogs);
console.log(filteredDogs);

const ourFilter = (arr, cb) => {
  const returnArr = [];

  for (const element of arr) {
    const returnVal = cb(element);

    if (returnVal) {
      returnArr.push(element);
    }
  }

  return returnArr;
};

const ourFilteredDogs = ourFilter(dogs, ourCallback);

console.log(ourFilteredDogs);

console.log(ourFilter([1, 2, 3, 4, 5], num => num <= 3));
