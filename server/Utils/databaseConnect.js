const mongoose = require('mongoose');
require('dotenv').config();

function DB() {
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', () => console.error.bind(console, 'DB connection error'));
  db.once('open', () => console.log('connected to db'));
}
module.exports = DB;
