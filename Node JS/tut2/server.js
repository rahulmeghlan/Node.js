var http = require('http');
var htmlResponse = '<html>';
htmlResponse += '<head><title>This is a test server</title></head>';
htmlResponse += '<body><h1>Hi, this is a test response</h1></body>';
htmlResponse += '</html>';
var server = http.createServer(function(request, response){
  response.writeHead(200, {'content-type': 'text/plain'});
  response.write(htmlResponse);
});

server.listen(8000);
