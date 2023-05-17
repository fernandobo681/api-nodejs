import { Schema, model } from 'mongoose';

export interface PaymentLogStrip {
    amount: number;
    currency: string;
    sale_id: string;
    customer: any;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const paymentLogStripeSchema = new Schema<PaymentLogStrip>({
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

export default model<PaymentLogStrip>('PaymentLogStrip', paymentLogStripeSchema);
