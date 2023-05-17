import { Schema, model } from 'mongoose';

export interface EventTracker {
    event_name: string;
    module: string;
    notes: string;
    user: any;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const eventTrackerchema = new Schema<EventTracker>({
    event_name: {
        type: String,
        required: true
    },
    module: {
        type: String
    },
    notes: {
        type: String
    },
    user: [{
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

export default model<EventTracker>('EventTracker', eventTrackerchema);
