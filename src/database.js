const mongoose = require('mongoose');

async function connect() {
  if (process.env.NODE_ENV === 'development') {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:27017`, {
      dbName: process.env.MONGO_DATABASE,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  if (process.env.NODE_ENV === 'production') {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = connect;
