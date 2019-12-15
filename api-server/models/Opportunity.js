const mongoose = require('mongoose');
const oppScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    expected_revenue: {
        type: Number,
        default: 0
    },
    expected_closed: {
        type: Date,
        required: false,
        default: ''
    },
    probability: {
        type: Number,
        default: 0
    },
    stage_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Stages'
    },
    customer: String,
    email: String,
    phone: String,
    description: String,
    company: String,
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
    },
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
module.exports = mongoose.model('Opportunities', oppScheme);