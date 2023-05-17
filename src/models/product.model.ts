import { Schema, model } from 'mongoose';

export interface Product {
    name: string;
    description: string;
    image: string;
    brand: string;
    purchase_price: number;
    sale_price: number;
    category: string;
    minimum_stock: number;
    maximum_stock: number;
    current_stock: number;
    discount_rate: number;
    branch_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const productSchema = new Schema<Product>({
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

export default model<Product>('Product', productSchema);
