var net = require("net");

var server =net.createServer(function(socket){
socket.write("hello\n");
socket.end("world\n");

socket.on('data', function(){
  socket.write(data);
 });
});

server.listen(8000);
