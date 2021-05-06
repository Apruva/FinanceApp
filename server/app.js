const express = require('express');
const app = express();
const helmet = require('helmet');
const fetch = require('node-fetch');
const rateLimit = require('./Middleware/rateLimit');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
//
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimit);

// run app
app.listen(process.env.DEV_PORT, function (err) {
  if (err) console.log(err);
  console.log('running server');
});
