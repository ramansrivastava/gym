const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
