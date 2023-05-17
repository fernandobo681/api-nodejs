import { Schema, model } from 'mongoose';

export interface ScheduleAppointment {
    service: any;
    dateTimeAppointment: Date;
    customer: any;
    unit_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

const scheduleAppointmentSchema = new Schema<ScheduleAppointment>({
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

export default model<ScheduleAppointment>('ScheduleAppointment', scheduleAppointmentSchema);
