const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 2345;

// middleware
app.use((req, res, next) => {
  // body-parser
  req.body = {
    username: 'jstamos', 
    password: '1234'
  };

  next();
});
// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));

// GET /
app.get('/', (request, response) => {
  console.log(request.body);
  response.send('<h1>Welcome to the home page!</h1>');
});

// GET /products
app.get('/products', (req, res) => {
  res.send('This is the product page');
});

// GET /about
app.get('/about', (req, res) => {
  res.status(202).send('This is the about page');
});

// catchall
app.get('*', (req, res) => {
  res.send('This is not the page you are looking for');
});

// specific
// general

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
