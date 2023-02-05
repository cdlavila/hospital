const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  hospital: {
    type: Schema.ObjectId,
    ref: 'hospitals',
  },
});

const model = mongoose.model('doctors', schema);

module.exports = model;
