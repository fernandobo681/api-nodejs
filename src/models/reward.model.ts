import { Schema, model } from 'mongoose';

export interface Reward {
  name: string;
  description: string;
  points: number;
  expiration_date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

const rewardSchema = new Schema<Reward>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }, 
  points: {
    type: Number
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

export default model<Reward>('Reward', rewardSchema);
