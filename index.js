var server = require('./server.js');
var route = require('./route.js');

server.start(route.route);