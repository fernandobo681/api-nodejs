// Database connection and configuration
const mongoose = require('mongoose');
const env = require('dotenv').config();

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Successful connection to the database');
  } catch (error) {
    console.error('Error connection to the database',error);
  }
}

module.exports = connectToDB;