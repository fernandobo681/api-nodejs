const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    brand: {
        type: String
    },
    purchase_price: {
        type: Number
    },
    sale_price: {
        type: Number
    },
    category: {
        type: String
    },
    minimum_stock: {
        type: Number
    },
    maximum_stock: {
        type: Number
    },
    current_stock: {
        type: Number
    },
    discount_rate: {
        type: Number
    },
    branch_id: {
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

module.exports = mongoose.model('Product', productSchema);