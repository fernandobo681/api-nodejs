import { Schema, model } from 'mongoose';

export interface Sale {
    appointment_id: string;
    customer: any;
    unit_id: string;
    payment: any;
    total_cost: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const saleSchema = new Schema<Sale>({
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

export default model<Sale>('Sale', saleSchema);
