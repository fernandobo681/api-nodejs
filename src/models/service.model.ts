import { Schema, model } from 'mongoose';

export interface Service {
  name: string;
  description: string;
  cost: number;
  discount_rate: number;
  duration: Number;
  img: string;
  unit_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const serviceSchema = new Schema <Service> ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  cost: {
    type: Number
  },
  discount_rate: {
    type: Number
  },
  duration: {
    type: Number
  },
  img: {
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

export default model<Service>('Service', serviceSchema);
