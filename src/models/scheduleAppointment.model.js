const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleAppointmentSchema = new Schema({
    service: [{
        id: String,
        name: String
    }],
    dateTimeAppointment: {
        type: Date,
        default: Date.now
    },
    customer: [{
        id: String,
        name: String
    }],
    unit_id: {
        id: String
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

module.exports = mongoose.model('ScheduleAppointment', scheduleAppointmentSchema);