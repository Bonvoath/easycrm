const http = require('http');
const app = require('./app');
const { http_port } = require('./config');

const server = http.createServer(app);

server.listen(http_port, function(){
    console.log('Server is running port '+ http_port);
});