const mongoose = require('mongoose');

const { Schema } = mongoose;

const mySchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'users',
  }],
});

const model = mongoose.model('chats', mySchema);

module.exports = model;
