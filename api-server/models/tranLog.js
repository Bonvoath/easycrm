const mongoose = require('mongoose');
const logScheme = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    fromJson: String,
    toJson: String
});
module.exports = new mongoose.model('TranLog', logScheme);
{
    10/10/2019 | 'INSERT DELETE UPDATE ERROR'
}