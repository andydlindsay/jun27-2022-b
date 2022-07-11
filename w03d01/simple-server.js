const http = require('http');
const port = 12345;

const server = http.createServer();

server.on('request', (request, response) => {
  console.log(request.method, request.url);

  if (request.method === 'GET' && request.url === '/about') {
    response.write('This is the about page.');
  } else if (request.method === 'GET' && request.url === '/') {
    response.write('Welcome to our site!');
  } else {
    response.write('This is not the page you are looking for');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
