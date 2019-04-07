import express from 'express';
import http from 'http';
import io from 'socket.io';
import next from 'next';
import { SOCKET_TYPES } from 'lib/enums';

const app = express();
const server = http.Server(app);
const socketIO = io(server);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();
let port = 3000;
nextApp.prepare()
  .then(() => {
    app.get('*', (req, res) => nextHandle(req, res));
    server.listen(port, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    })
  })


socketIO.on('connection', (socket) => {
  socketIO.sockets.emit('hello', 'hello');
  socketIO.on(SOCKET_TYPES.NEW_MESSAGE, (data) => {
    const { userId } = data;
    socketIO.sockets.emit(`${SOCKET_TYPES.NEW_MESSAGE}_userId`, data);
  });
});