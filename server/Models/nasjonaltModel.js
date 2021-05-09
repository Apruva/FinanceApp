const mongoose = require('mongoose');

const NasjonaltModelSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('NasjonaltModel', NasjonaltModelSchema);
