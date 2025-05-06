const http = require('http');

// สร้างเซิร์ฟเวอร์ HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js!\n');
});

// กำหนดให้เซิร์ฟเวอร์รันที่พอร์ต 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
