console.log('1. top line of the file');

setTimeout(() => {
  console.log('3. inside the timeout');
}, 1);

console.log('2. bottom line of the file');

// for (let i = 0; i < 10000; i++) {
//   const date = new Date();
//   console.log(date);
// }