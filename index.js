const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./database/db');
const PORT = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/product', require('./routes/prod-routes'));
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.end();
});
app.listen(PORT, () => {
  console.log('App is listening to server', PORT);
});
