const mongoose = require('mongoose');
const schemeUser = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    phone_confirmed: {
        type: Boolean,
        default: false
    },
    email_confirmed: {
        type: Boolean,
        default: false
    },
    user_type: {
        type: Number,
        default: 0
    },
    language: {
        type: String,
        default: 'en'
    },
    profile: {
        type: String,
        default: 'profile.png'
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
module.exports = mongoose.model("User", schemeUser);