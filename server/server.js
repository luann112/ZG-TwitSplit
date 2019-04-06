import next from 'next';
import express from 'express';
import io from 'socket.io';


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000;
app.prepare()
  .then(() => {
    const server = express();
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (error) => {
      if (error) throw error;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  })