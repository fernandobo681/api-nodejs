import { Schema, model } from 'mongoose';

export interface CouponRedeemed {
    coupon_code: string;
    redemtion_date: Date;
    discount_total: number;
    customer: any;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}


const couponRedeemedSchema = new Schema<CouponRedeemed>({
    coupon_code: {
        type: String,
        unique: true,
        required: true
    },
    redemtion_date: {
        type: Date,
        default: null
    },
    discount_total: {
        type: Number
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

export default model<CouponRedeemed>('CouponRedeemed', couponRedeemedSchema);
