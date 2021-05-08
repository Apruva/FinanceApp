const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function () {
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', () => console.log('error connecting to db'));
  db.once('open', () => console.log('connected to db'));
};
