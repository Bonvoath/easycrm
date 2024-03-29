const mongoose = require('mongoose');
const leadScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    customer: String,
    email: String,
    phone: String,
    mobile: String,
    description: String,
    company: String,
    address: String,
    state: String,
    city: String,
    zip: String,
    country: String,
    contact_name: String,
    job_position: String,
    priority: Number,
    sale_per_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Employees'
    },
    sale_team_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'SaleTeams'
    },
    date_losed: {
        type: Date,
        required: false,
    },
    lose_by_id: {
        type: String,
        required: false
    },
    date_restored: {
        type: Date,
        required: false
    },
    restore_by_id: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        default: 1
    },
    sort: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now(),
        required: true
    },
    created_by: {
        type: String,
        default: '',
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    updated_by: {
        type: String,
        default: ''
    }
});
module.exports = mongoose.model('Leads', leadScheme);