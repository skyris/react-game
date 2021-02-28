const mongoose = require('mongoose');
const { MONGO_CONNECTION } = require('./config');
const questions = require('./data');

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

async function connectDB() {
  try {
    mongoose.connect(MONGO_CONNECTION, mongooseOptions);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', async () => {
      console.log('Connected!');
      // db.dropDatabase();
      questions.forEach(q => q.save());
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { connectDB };
