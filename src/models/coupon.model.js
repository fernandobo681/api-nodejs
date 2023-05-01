const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    coupon_code: {
        type: String,
        unique: true,
        required: true
    },
    discount_rate: {
        type: Number
    },
    discount_type: {
        type: String
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

module.exports = mongoose.model('Coupon', couponSchema);