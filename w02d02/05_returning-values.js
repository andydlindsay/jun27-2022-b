const higherOrderFunc = (cb) => {
  const user = {
    username: 'Alice'
  };
  console.log('1. before the timeout');
  setTimeout(() => {
    console.log('3. inside the timeout');
    user.username = 'Bob';

    cb(null, user);
    // return user;
  }, 2000);
  console.log('2. after the timeout');

  // return user;
};

console.log('4. before the main call');
higherOrderFunc((err, user) => {
  console.log('6. inside the callback function');
  console.log('updated user???', user);
});
console.log('5. after the main call');