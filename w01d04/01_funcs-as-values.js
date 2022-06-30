// function declaration
// function sayHello (name) {
//   console.log(`hello there ${name}`);
// }

// function expression
const sayHello = function sayHello (name) {
  console.log(`hello there ${name}`);
};

// sayHello('Bob');

// console.log(sayHello.toString());
// console.log(sayHello('Alice'));

const anotherFunc = sayHello;
// const anotherFunc = sayHello('Bob');

// anotherFunc('Charlie');

sayHello.something = 'waht?????';

// console.log(sayHello);

const arrOfFuncs = [sayHello, console.log];

arrOfFuncs[0]('Debbie');

arrOfFuncs[1]('hello world');

// const a = 5;
// const b = a;
// console.log(b);

const log = console.log;
log('jello');

// const shorterName = ridiculouslyLongFunctionNameThatIsSuperDescriptive;


// const $ = jQuery