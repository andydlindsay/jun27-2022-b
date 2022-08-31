"use strict";
// 3 most nb things: params, return value, name
const sayHello = (name) => {
    return 'hello';
};
// const returnVal = sayHello('Alice');
const returningPromise = (num) => {
    return new Promise((resolve) => {
        resolve(num);
    });
};
returningPromise(42).then((something) => { });
