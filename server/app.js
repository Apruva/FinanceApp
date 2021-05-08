const express = require('express');
const app = express();
const helmet = require('helmet');
const rateLimit = require('./Middleware/rateLimit');
const cors = require('cors');
const morgan = require('morgan');
const databaseConnect = require('./Utils/databaseConnect');

const helseregionRoute = require('./Routes/helseregionRoute');
const nasjonaltRoute = require('./Routes/nasjonaltRoute');
const helseforetakRoute = require('./Routes/helseforetakRoute');

require('dotenv').config();

databaseConnect();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(rateLimit);
const jwtCheck = require('./Middleware/jwtCheck');
app.use(jwtCheck);

app.use('/api/v1/nasjonalt', nasjonaltRoute);

app.use('/api/v1/helseregion', helseregionRoute);

app.use('/api/v1/helseforetak', helseforetakRoute);

app.listen(process.env.DEV_PORT, function (err) {
  if (err) console.log(err);
  console.log('running server');
});
