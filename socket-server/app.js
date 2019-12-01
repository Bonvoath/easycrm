var http = require('http').createServer()
var io = require('socket.io')(http)
var messages = [];
io.on('connection', socket => {
    console.log(socket.id, ' is connected');
    socket.on('send', (req) => {
        var record = {
            id: messages.length,
            msg: req.msg
        }
        messages.push(record);
        io.emit('message', record);
    });
    socket.on('disconnect', () => {
        console.log(socket.id, ' is disconnected');
    });
});

http.listen(4000, () => {
    console.log('listening on *:4000');
});
