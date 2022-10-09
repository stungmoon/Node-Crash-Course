const http = require('http');

// Create server object
http
  .createServer((req, res) => {
    // Write response
    res.write('Message received');
    res.end();
  })
  .listen(5000, () => console.log('Server running...'));