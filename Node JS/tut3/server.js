var http = require('http');

var server = http.createServer(function(request, response){
 
 response.writeHead(200, {'content-type':'text/plain'});
 response.write("hello\n");

 setTimeout(function(){
  response.end("world\n");
 }, 2000);

});

 server.listen(8000);
