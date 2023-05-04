const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    customer: [{
        id: String,
        name: String
    }],
    status: {
        type: String,
        required: true
    },
    required_services: [{
        name: String,
        discount_rate: Number,
        duration: Number,
        cost: Number
    }],
    required_products: [{
        name: String,
        discount_rate: Number,
        pieces: Number,
        cost: Number
    }],
    tracking_history_status: [{
        description: String,
        date: {
            type: Date,
            default: null
        }
    }],
    coordinates: [{
        name: String,
        lat: Number,
        long: Number
    }],
    qualification: [{
        rating: String,
        description: String,
        user_id: String
    }],
    unid_id: {
        type: String
    },
    payment_type: {
        type: String
    },
    cost: [{
        subtotal: Number,
        total: Number
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

module.exports = mongoose.model('Appointment', appointmentSchema);