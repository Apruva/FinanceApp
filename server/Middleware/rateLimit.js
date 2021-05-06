const expressRateLimit = require('express-rate-limit');

const rateLimit = expressRateLimit({
  windowMs: 10 * 60 * 1000,
  max: 30,
  message: { error: 'You reached the limit of requests. Try again later.' },
  headers: true,
  statusCode: 429,
});

module.exports = rateLimit;
