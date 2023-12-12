import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/service1', async (req, res) => {
  const response = await axios.get('http://localhost:3001');
  res.send(response.data);
});
app.get('/service2', async (req, res) => {
  const response = await axios.get('http://localhost:3002');
  res.send(response.data);
});

app.listen(port, () => {
  console.log('API Gateway listening at http://localhost:3000');
});
