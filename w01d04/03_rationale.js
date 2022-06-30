
// for (const day of daysOfTheWeek) {
  //   console.log(`the current day is ${day}`);
// }

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday'];
  
const printTheDay = function (day) {
  console.log(`the current day is ${day}`);
}

const doToEachElement = function (arr, func) {
  // loop over the array
  for (const element of arr) {
    // do something for each element
    func(element);
  }
};

doToEachElement(daysOfTheWeek, printTheDay);

console.log();

daysOfTheWeek.forEach(printTheDay);
