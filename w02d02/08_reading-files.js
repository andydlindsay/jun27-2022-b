const fs = require('fs');

// console.log(fs);

fs.readFile('./fake-data.html', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    return console.log('err', err);
  }

  console.log('async return', data.length);
});

const fileContentsSync = fs.readFileSync('./fake-data.html', { encoding: 'utf8' });

console.log('sync return', fileContentsSync.length);
