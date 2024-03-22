import express from 'express';
import data from './data';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/fs', (req, res) => {
  const path = req.query.path || 'root';
  res.json(data.paths.find(entry => entry.id === path) || {});
});

app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
