const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use((req, res, next) => {
  console.log('I run first');
  next();

  console.log('After the response');
});

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'gabagool',
  keys: ['whatever', 'hello'],
}));
app.use(methodOverride('_method'));

// req.method = req.query._method

//
// "Database" stub
//
const users = {
  nally: {
    username: 'nally',
    password: 'qwerty'
  },
  monkey: {
    username: 'monkey',
    password: 'fuzz'
  }
};

//
// Helpers
//
const getUserByUsername = (username) => {
  for (const userId in users) {
    const user = users[userId];

    if (user.username === username) {
      return user;
    }
  }

  return null;
};

//
// POST Routes
//
// register
app.post('/users/new', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // check if username or password are empty strings (or any other falsey value)
  if (!username || !password) {
    return res.status(400).send('Please enter a username and a password');
  }

  // check if a user with this username already exists
  const user = getUserByUsername(username);

  if (user) {
    return res.status(400).send('A user with that username already exists');
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  // create the new user object
  const newUser = {
    username: username,
    password: hash
  };

  // add the new user object to the users "database"
  users[username] = newUser;
  console.log('users', users);

  // send the user to the login page
  res.redirect('/login');
});

// login
app.delete('/users/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // check if username or password are empty strings (or any other falsey value)
  if (!username || !password) {
    return res.status(400).send('Please enter a username and a password');
  }

  // check if a user with this username already exists
  const user = getUserByUsername(username);

  if (!user) {
    return res.status(400).send('No user with that username found');
  }

  const result = bcrypt.compareSync(password, user.password);

  // check if passwords do not match
  // if (user.password !== password) {
  if (!result) {
    return res.status(401).send('Password is incorrect');
  }

  // set the cookie
  // res.cookie('user', user.username);
  req.session.user = user.username;

  // redirect the user to the profile page
  res.redirect('/profile');
});

// logout
app.post('/users/logout', (req, res) => {
  // res.clearCookie('user');
  req.session = null;
  res.redirect('/');
});

//
// GET Routes
//
app.get('/', (req, res) => {
  console.log('inside the home route');
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/logout', (req, res) => {
  res.render('logout');
});

app.get('/profile', (req, res) => {
  // const username = req.cookies.user;
  const username = req.session.user;
  const user = getUserByUsername(username);

  if (!user) {
    return res.status(401).send('You must be logged in to see this page');
  }

  const templateVars = {
    password: user.password,
    username: user.username
  };

  res.render('profile', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
