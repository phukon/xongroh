const mongoose = require('mongoose');

const APIStatusSchema = new mongoose.Schema(
  {},
  { strict: false } // Allow dynamic fields
);

const APIStatus = mongoose.model('APIStatus', APIStatusSchema);

module.exports = APIStatus;
