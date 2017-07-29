import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Hello world node.js es6 app.');
});

export { routes }; 
