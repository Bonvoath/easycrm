const mongoose = require('mongoose');
const taskScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Employees'
    },
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Tags'
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Customers'
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Projects'
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