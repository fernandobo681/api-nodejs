const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchesSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
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
    coupons: [{
        coupon_id: String,
        coupon_code: String
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

module.exports = mongoose.model('Branches', branchesSchema);