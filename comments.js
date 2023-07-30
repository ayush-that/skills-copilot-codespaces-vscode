// Create web server
// Import the required modules
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the content type of the response to 'text/plain'
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response content
  res.write('Hello, this is a simple web server!');
  
  // End the response
  res.end();
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
