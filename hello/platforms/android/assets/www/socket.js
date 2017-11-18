var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// serving an html file through node.js
var msg_main=undefined;
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('send', function(msg){
    msg_main=msg;
    console.log('message: ' + msg.lat);
    console.log('message'+msg.lng);
  });

  socket.broadcast.emit('getloc',msg_main);

  // socket.on('typing', function(msg){
  //   socket.broadcast.emit('typing',msg);
  // });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
