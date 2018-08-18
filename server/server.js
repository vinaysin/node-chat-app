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
    socket.on('createMessage', (message) => {
        console.log('Created message:', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date()
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });
});



server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
