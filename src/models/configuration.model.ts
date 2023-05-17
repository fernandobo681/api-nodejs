import { Schema, model } from 'mongoose';

export interface Configuration {
  company_name: string;
  rfc: string;
  phone: string;
  email: string;
  schedule: any;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const configurationSchema = new Schema<Configuration>({
  company_name: {
    type: String,
    required: true
  },
  rfc: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  schedule: [{
    day: String,
    open: String,
    breaktime: String,
    close: String
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

export default model<Configuration>('Configuration', configurationSchema);
