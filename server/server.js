const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
    console.log('Client connected...');

    socket.emit('newMessage', {
        from: 'vinay@abc.com',
        text: 'Hi, How are you?',
        createdAt: Date()
    });

    socket.on('createMessage', (newMessage) => {
        console.log('Created message:', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});



server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
