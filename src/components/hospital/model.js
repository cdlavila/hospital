const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  foundationDate: {
    type: Date,
    required: true,
  }
});

const model = mongoose.model('hospitals', mySchema);

module.exports = model;
