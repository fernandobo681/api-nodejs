import { Schema, model } from 'mongoose';

export interface Unit {
    model: string;
    brand: string;
    year: number;
    fuel_type: string;
    estimated_price: Number;
    tuition: string;
    branch_id: string;
    colaborators: any;
    expenses: any;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }

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

export default model<Unit>('Unit', unitSchema);
