import express from 'express';
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello from microservice-2!');
});

app.listen(port, () => {
  console.log('microservice-2 listening at http://localhost:3002');
});
