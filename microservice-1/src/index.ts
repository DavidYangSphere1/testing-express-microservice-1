import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from microservice-1!');
});

app.listen(port, () => {
  console.log('microservice-1 listening at http://localhost:3001');
});
