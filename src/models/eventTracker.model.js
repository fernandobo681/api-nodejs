const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventTrackerchema = new Schema({
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

module.exports = mongoose.model('EventTracker', eventTrackerchema);