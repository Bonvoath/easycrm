const mongoose = require('mongoose');
const taskScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Tags'
    },
    deadline: {
        type: Date,
        require: false
    },
    planned_hours: String,
    description: String,
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
module.exports = mongoose.model('Tasks', taskScheme);