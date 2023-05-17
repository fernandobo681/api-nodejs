import { Schema, model } from 'mongoose';

export interface Banner {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  img_url: string;
  offer_reference: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const bannerSchema = new Schema({
  // id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    default: null
  },
  end_date: {
    type: Date,
    default: null
  },
  img_url: {
    type: String,
    required: true
  },
  offer_reference: {
    type: String,
    required: true
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

export default model<Banner>('Banner', bannerSchema);
