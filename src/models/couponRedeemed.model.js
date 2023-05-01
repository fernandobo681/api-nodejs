const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const couponRedeemedSchema = new Schema({
    coupon_code: {
        type: String,
        unique: true,
        required: true
    },
    redemtion_date: {
        type: Date,
        default: null
    },
    discount_total: {
        type: Number
    },
    customer: [{
        id: String,
        name: String
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

module.exports = mongoose.model('CouponRedeemed', couponRedeemedSchema);