const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientInfoSchema = new Schema({
    visitDate: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    },
    bodyTemperature: Number,
    heartRate: Number,
    bp: Number,
    weight: Number,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

})

mongoose.model('PatientInfo', PatientInfoSchema);