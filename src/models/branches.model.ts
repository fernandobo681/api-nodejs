import { Schema, model } from 'mongoose';

export interface Branches {
    name: string;
    email: string;
    phone: number;
    addresses: any;
    payment_methods: any;
    coordinates: any;
    coupons: any;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const branchesSchema = new Schema<Branches>({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    addresses: [{
        street: String,
        number: String,
        suburb: String,
        city: String,
        state: String,
        postal_code: Number,
        reference: String,
        lat: Number,
        long: Number
    }],
    payment_methods: [{
        payment_type: String,
        name_on_card: String,
        card_number: Number,
        valid_future_date: String,
        CVC: Number
    }],
    coordinates: [{
      name: String,
      lat: Number,
      long: Number
    }],
    coupons: [{
        coupon_id: String,
        coupon_code: String
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

export default model<Branches>('Branches', branchesSchema);
