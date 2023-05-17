// Database connection and configuration
import mongoose from 'mongoose';
import 'dotenv/config';

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successful connection to the database');
  } catch (error) {
    console.error('Error connection to the database',error);
  }
}

module.exports = connectToDB;