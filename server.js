const http = require('http');
const gd = require('node-gd');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  let img = gd.createTrueColorSync(100, 100);
  res.end(img.gifPtr());

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});