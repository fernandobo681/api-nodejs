const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    appointment_id: {
        type: String,
        required: true
    },
    customer: [{
        id: String,
        name: String
    }],
    unit_id: {
        type: String
    },
    payment: [{
        status: String,
        payment_type: String
    }],
    total_cost: {
        type: Number
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

module.exports = mongoose.model('Sale', saleSchema);