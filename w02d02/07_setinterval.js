let clock = 10;

const intervalRef = setInterval(function() {
  if (clock === 0) {
    clearInterval(this);
  }

  console.log('hello', clock);
  clock -= 1;
}, 100);

// console.log(intervalRef);
// clearInterval(intervalRef);
