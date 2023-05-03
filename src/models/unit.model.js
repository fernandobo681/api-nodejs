const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    model: {
        type: String
    },
    brand: {
        type: String
    },
    year: {
        type: Number
    },
    fuel_type: {
        type: String
    },
    estimated_price: {
        type: Number
    },
    tuition: {
        type: String
    },
    branch_id: {
        type: String
    },
    colaborators: [{
        id: String,
        name: String
    }],
    expenses: [{
        expense_type: String,
        expense_cost: String
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

module.exports = mongoose.model('Unit', unitSchema);