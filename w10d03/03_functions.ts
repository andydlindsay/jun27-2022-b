// 3 most nb things: params, return value, name

const sayHello = (name: string): string => {
  return 'hello';
};

// const returnVal = sayHello('Alice');

const returningPromise = (num: number): Promise<number> => {
  return new Promise((resolve) => {
    resolve(num);
  });
};

returningPromise(42).then((something) => {});

