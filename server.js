import express from 'express';

import {routes} from './routes';

const server = express();

// Routers
server.use('/', routes);

server.listen(3000, () => {
  console.log('ES6 application listening on port 3000!');
});