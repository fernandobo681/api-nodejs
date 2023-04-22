const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }, 
  points: {
    type: Number
  },
  expiration_date: {
    type: Date,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: {
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Reward', rewardSchema);