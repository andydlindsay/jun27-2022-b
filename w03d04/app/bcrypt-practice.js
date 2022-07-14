const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync(10);
// console.log('salt: ', salt);

const password = 'secret';

// const hash = bcrypt.hashSync(password, salt);

// console.log('hash: ', hash);

// const result = bcrypt.compareSync('secret', hash);
// console.log('result: ', result);

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash', hash);
  });
});

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('async salt', salt);
    bcrypt.hash(password, salt)
      .then((hash) => {
        console.log('hash', hash);
      });
  });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('async salt', salt);
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    console.log('hash', hash);
  });
