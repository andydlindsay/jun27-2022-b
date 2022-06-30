// anonymous === without name

const sayHello = function sayHello (name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function (func) {
  func('Francis');
};

runMyFunc(sayHello);

console.log();

runMyFunc(function (name) {
  console.log(`hello there ${name}`);
});

// const username = 'Carol';
// sayHello(username);

// sayHello('Dean');
// console.log('Elise');
