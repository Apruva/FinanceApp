const mongoose = require('mongoose');

const HelseforetakModelSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('HelseforetakModel', HelseforetakModelSchema);
