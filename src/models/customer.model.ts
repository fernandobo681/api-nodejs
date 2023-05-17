import { Schema, model } from 'mongoose';

export interface Customer {
  name: string;
  email: string;
  phone: string;
  branch: string;
  password: string;
  reward_points: number;
  addresses: any;
  payment_methods: any;
  coordinates: any;
  vehicles: any;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const customerSchema = new Schema<Customer>({
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
  password: {
    type: String,
    required: true
  },
  reward_points: {
    type: Number,
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
  vehicles: [{
    make: String,
    model: String,
    year: Number,
    description: String
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

export default model<Customer>('Customer', customerSchema);
