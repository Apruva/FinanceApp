const mongoose = require('mongoose');

const HelseregionModelSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('HelseregionModel', HelseregionModelSchema);
