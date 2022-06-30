// coffeescript .coffee
// ESv6 JS ECMAScript ISO 9001 ESLint

// advantages of arrow funcs
// 1. no 'function' keyword
// 2. no parens needed for a single argument
// 3. if only one line, no curly braces needed
// 4. if no curly braces, then expression are automatically returned (implicit)

// `this` arrow funcs do not create `this`

const sayHello = function (name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

// const doubled = num => num * 2;

// const doubledOg = function(num) {
//   return num * 2;
// }

// runMyFunc(function () {})


const result = sayHello('Alice');
const result2 = sayHello2('Alice');

console.log(result);
console.log(result2);
// function() {}
// () => {}

