// File: http_client_request_object.js
// Note: Understanding http.ClientRequest Object
// Date: 9/4/2020
//..............................................................................
console.log("Mounting http_client_request_object.js...\n");
/*
 * The http.ClientRequest object is created internally when you call the
 * http.request() when building and HTTP client. 
 * 
 * The object is intended to represent the request while it is in progress to 
 * the server.
 * 
 * You use the http.ClientRequest object to initiate, monitor and handle the 
 * response from the server.
 * 
 * The http.ClientRequest object implements a << Writable >> stream, so it 
 * provides all the functionality of a Writable stream object. For example, you
 * can use the write() method to write to the http.ClientRequest object as well
 * as pipe a << Readable >> stream into it.
 * 
 * To implement a http.ClientRequest object, you use a call to http.request(),
 * with the following: 
 * 
 * http.request(options, callback) // re: HTTP object
 * 
 * The options parameter is an object (meta) who properties define how to open
 * and send the HTTP request to the server.
 * 
 * The callback parameter is a callback function that is call after a request 
 * is sent to the server and handle the response back from the server. The only 
 * parameter to the callback is and http.IncomingMessage object that is the 
 * response from the server.
 * 
 * The basics of the implementation of the http.ClientRequest object as follows:
 * 
 */
var http = require('http');

var options = {
  hostname: 'localhost',
  path: '/',
  port: 8080,
  method: 'POST',
};
// Create http.ClientRequest object internally
var request = http.request(options, function(response) {
  var str = '';
	
  response.on('data', function(chunk) {
    str += chunk;
  });
	
  response.on('end', function() {
    console.log(str);
  });
});

request.end();

/* 
 * Options than can be specified when creating a http.ClientRequest object:
 * - host
 * - hostname
 * - port
 * - localAddress
 * - socketPath
 * - method
 * - path
 * - headers
 * - auth
 * - agent
 * 
 * Events available on http.ClientRequest object
 * - response
 * - socket
 * - connect
 * - upgrade
 * - continue
 * 
 * Methods available on http.ClientRequest object
 * - write(chunk, [encoding])
 * - end([data], encoding)
 * - abort()
 * - setTimeout(timeout, [callback])
 * - setNoDelay([noDelay]
 * - setSocketKeepAlive([enable], [initialDelay])
 */
// eof
