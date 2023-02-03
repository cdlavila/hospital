const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'chats',
  },
  user: {
    type: Schema.ObjectId,
    ref: 'users',
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const model = mongoose.model('messages', schema);

module.exports = model;
