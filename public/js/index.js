var socket = io();
socket.on('connect', function() {
    console.log('Connected to server.')
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');
});

socket.on('newUser', function(message) {
    console.log(`${message.text} from ${message.from}`);
});

socket.on('newUserMessage', function(message) {
    console.log(`${message.text} from ${message.from}`);
});

socket.on('newMessage', function(newMessage) {
    console.log('New message arrived:', newMessage);
});
