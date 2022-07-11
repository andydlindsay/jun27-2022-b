# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

http://localhost:8080/u/cjbz7n
http://www.lighthouselabs.ca

server - has data
client - wants data

### Web Server
- servers specific to the web
* serve web appropriate files: video, images, HTML, CSS, JS, JSON, XML
* web servers run on HTTP

you ded
                      move:up
client <==== TCP ====> server

response
client <==== TCP/HTTP ====> server

### HTTP
* HyperText Transfer Protocol
* sits on top of TCP
* request/response system

* server need: port and host/ip address
* 65535
* host: localhost

### Request
* verb and a path
* verb - what we want to do
  * GET, POST, DELETE, PUT, PATCH
  * GET - I'd like to retrieve information
  * POST - client sends info to a server
* path - what we want to do it to
  * `/users`, `/videos`, `/login`

http://localhost:3000/messages
GET /messages

### Response
* may or may not have a body/payload
* status code
  * 200 - okay
  * 404 - page not found
  * 503 - server error

```js
const net = require('net');
const port = 12345;

const server = net.createServer();

server.on('connection', (connection) => {
  connection.write('Move: up');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

```js
const http = require('http');
const port = 12345;

const server = http.createServer();

server.on('request', (request, response) => {
  response.write('Welcome to our site!');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
```

### Middleware
* code that runs between the request and the response



response
        cookie-parser  body-parser
        req.cookies     req.body
        next();         next();  
client + middleware + middleware + server/route handler
client <==== TCP/HTTP ====> server








