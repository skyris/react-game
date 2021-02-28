const express = require('express');
const cors = require('cors');
const mainRouter = require('./resources/mainRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running');
    return;
  }
  next();
});

mainRouter(app);

module.exports = app;
