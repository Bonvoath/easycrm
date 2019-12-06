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
    sort: {
        type: Number,
        required: true,
        default: 0
    },
    stage_id:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stages'
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