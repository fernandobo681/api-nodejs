import { Schema, model } from 'mongoose';

export interface Coupon {
    coupon_code: string;
    discount_rate: number;
    discount_type: string;
    expiration_date: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const couponSchema = new Schema<Coupon>({
    coupon_code: {
        type: String,
        unique: true,
        required: true
    },
    discount_rate: {
        type: Number
    },
    discount_type: {
        type: String
    },
    expiration_date: {
        type: Date,
        default: null
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

export default model<Coupon>('Coupon', couponSchema);
