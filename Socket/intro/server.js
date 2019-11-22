const express = require('express');
const app = express();
const server = app.listen(1337 || process.env.PORT);
const io = require('socket.io')(server);

users = [];
connections = [];

//USE
app.use(express.static(__dirname + "/public"));
console.log("Server running")

io.sockets.on('connection', function(socket){
    connections.push(socket);
    console.log("Connected %s sockets connected",connections.length)

    socket.on("disconnect", function(data){
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket),1);
        console.log('Disconnected %s sockets connected', connections.length);
    })

    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg:data, user: socket.username});
    })

    socket.on('new user', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username)
        updateUsernames();
    })

    function updateUsernames(){
        io.sockets.emit('get users', users)
    }
})

