var socket = io();
socket.on('connect', function() {
    console.log('Connected to server.')
});

socket.on('disconnect', function() {
    console.log('Disconnected from server.');

    socket.emit('createMessage', {
        from: 'vishal@abc.com',
        text: 'Hi, How are you?'
    });
});

socket.on('newMessage', function(newMessage) {
    console.log('New message arrived:', newMessage);
});
