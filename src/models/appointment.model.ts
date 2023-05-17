import { Schema, model }  from 'mongoose';

export interface Appointment {
    customer: string;
    status: string;
    required_services: any;
    required_products: any;
    tracking_history_status: any;
    coordinates: any;
    qualification: any;
    unid_id: string;
    payment_type: string;
    cost: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const appointmentSchema = new Schema<Appointment>({
    customer: [{
        id: String,
        name: String
    }],
    status: {
        type: String,
        required: true
    },
    required_services: [{
        name: String,
        discount_rate: Number,
        duration: Number,
        cost: Number
    }],
    required_products: [{
        name: String,
        discount_rate: Number,
        pieces: Number,
        cost: Number
    }],
    tracking_history_status: [{
        description: String,
        date: {
            type: Date,
            default: null
        }
    }],
    coordinates: [{
        name: String,
        lat: Number,
        long: Number
    }],
    qualification: [{
        rating: String,
        description: String,
        user_id: String
    }],
    unid_id: {
        type: String
    },
    payment_type: {
        type: String
    },
    cost: [{
        subtotal: Number,
        total: Number
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

export default model<Appointment>('Appointment', appointmentSchema);
