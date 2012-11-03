var http = require("http");

var s = http.createServer(function(req, res){
 res.writeHead(200, {'content-type': 'text/plain'});
 res.write("Hello\n");

 setTimeout(function(){
  res.end("test");
 }, 100)
});

s.listen(8000);
