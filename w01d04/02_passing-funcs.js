const sayHello = function sayHello (name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function (func, argToPassToFunc) {
  // console.log(func.toString());
  func(argToPassToFunc);
};

runMyFunc(sayHello, 'Eliza');
runMyFunc(console.log, 'hi how is it going???');
