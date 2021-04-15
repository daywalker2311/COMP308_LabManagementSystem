const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyMotivationalTipSchema = new Schema({
    title: String,
    content: String,
    sender: String,
    receiver: {
        type: String,
        default: 'ALL',
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
        default: Date.now,
    },
});

DailyMotivationalTipSchema.pre('save', function (next) {
    next();
});

DailyMotivationalTipSchema.set('toJSON', {
    getters: true,
    virtuals: true,
});

mongoose.model('DailyMotivationalTip', DailyMotivationalTipSchema);
