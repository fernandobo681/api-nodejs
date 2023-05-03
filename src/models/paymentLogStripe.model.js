const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentLogStripeSchema = new Schema({
    amount: {
        type: Number
    },
    currency: {
        type: String
    },
    sale_id: {
        type: String
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

module.exports = mongoose.model('PaymentLogStrip', paymentLogStripeSchema);