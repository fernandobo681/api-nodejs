const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  // id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  reward_points: {
    type: Number,
    required: true
  },
  addresses: [{
    street: String,
    number: String,
    suburb: String,
    city: String,
    state: String,
    postal_code: Number,
    reference: String,
    lat: Number,
    long: Number
  }],
  payment_methods: [{
    payment_type: String,
    name_on_card: String,
    card_number: Number,
    valid_future_date: String,
    CVC: Number
  }],
  coordinates: [{
    name: String,
    lat: Number,
    long: Number
  }],
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

module.exports = mongoose.model('Customer', customerSchema);