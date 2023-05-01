const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }, 
  cost: {
    type: Number
  }, 
  discount_rate: {
    type: Number
  }, 
  duration: {
    type: Number
  },
  img: {
    type: String
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

module.exports = mongoose.model('Service', serviceSchema);