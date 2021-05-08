const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
require('dotenv').config();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.JWKS_URI}`,
  }),
  audience: 'http://localhost:3001',
  issuer: `${process.env.ISSUER}`,
  algorithms: ['RS256'],
});

module.exports = jwtCheck;
