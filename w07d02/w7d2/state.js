// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count += 1;
//     console.log(this.count);
//   }
// }

// const counter = new Counter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

const name = 'alice';

// closure
let count = 0;

const increment = () => {
  count += 1;
  console.log(count);
};

increment();
increment();
increment();
increment();
increment();