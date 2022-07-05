const delays = [42, 790, 1234, 400, 800, 4200, 2300, 1500, 1600, 1024];

for (const delay of delays) {
  setTimeout(() => {
    console.log(delay);
  }, delay);
}
