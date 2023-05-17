import { Schema, model } from 'mongoose';

export interface Collaborator {
    name: string;
    email: string;
    phone: string;
    branch: string;
    password: string;
    addresses: any;
    payment_methods: any;
    coordinates: any;
    unit_id: string;
    rol: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const collaboratorSchema = new Schema<Collaborator>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    branch: [{
        id: String,
        name: String
    }],
    password: {
        type: String,
        required: true
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
    unit_id: {
        type: String
    },
    rol: {
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


export default model<Collaborator>('Collaborator', collaboratorSchema);
