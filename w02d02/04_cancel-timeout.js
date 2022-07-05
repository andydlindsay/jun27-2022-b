const timer = 10;

const returnVal = setTimeout(() => {
  console.log('inside the timeout');
}, timer);

// console.log(returnVal);

clearTimeout(returnVal);
