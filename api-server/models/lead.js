const mongoose = require('mongoose');
const leadScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    customer: String,
    email: String,
    phone: String,
    description: String,
    company: String,
    sort: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    created_by: {
        type: String,
        default: '',
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    updated_by: {
        type: String,
        default: ''
    }
});
module.exports = mongoose.model('Leads', leadScheme);