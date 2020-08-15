let io;

module.exports = {
  init: (server) => {
    io = require('socket.io').listen(server);
    return io;
  },
  get: () => {
    if (!io) throw new Error('SocketIO is not supported');
    return io;
  },
};
