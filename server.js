// Server-Side Entry Point
// -----------------------
//
// This is where we configure our server to use the appropriate port and being listening for requests.

// Import the Express app which is configured in the serverSetup.js file.
var app = require('./server/serverSetup.js').app;

console.log('got the app:', app);

console.log('Mark: here is the server.js');

// If deployed to production then the port will be assigned from the production environment's PORT environment variable. Otherwise, if run locally the server will listen for requests on port 8000.
var port = process.env.PORT || 8080;

// Have the server begin listening for requests on the appropriate port.
app.listen(port);

console.log('Server is now listening on port ' + port);
