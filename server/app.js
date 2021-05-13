const express = require('express');
const app = express();
require('dotenv').config();
const databaseConnect = require('./Utils/databaseConnect');
const helmet = require('helmet');
const rateLimit = require('./Middleware/rateLimit');
const cors = require('cors');
const morgan = require('morgan');

const helseregionRoute = require('./Routes/helseregionRoute');
const nasjonaltRoute = require('./Routes/nasjonaltRoute');
const helseforetakRoute = require('./Routes/helseforetakRoute');

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

app.get('/favicon.ico', (req, res) => res.status(204));
databaseConnect();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimit);

app.use(
  jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${process.env.JWKS_URI}`,
    }),
    audience: 'http://localhost:3001',
    issuer: `${process.env.ISSUER}`,
    algorithms: ['RS256'],
  })
);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(err.status).json({
      error: err.name,
      message: err.message,
      code: err.code,
      status: err.status,
    });
  }
  next();
});

// const fetchHelseforetak = require('./Utils/fetchHelseforetak');
// fetchHelseforetak();
app.use('/api/v1/nasjonalt', nasjonaltRoute);

app.use('/api/v1/helseregion', helseregionRoute);

app.use('/api/v1/helseforetak', helseforetakRoute);

app.listen(process.env.DEV_PORT, function (err) {
  if (err) console.log(err);
  console.log('running server');
});
