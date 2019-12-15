const mongoose = require('mongoose');
const customerScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    tax_id: String,
    phone: String,
    mobile: String,
    email: String,
    website: String,
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
module.exports = new mongoose.model('Customers', customerScheme);