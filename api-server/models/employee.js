const mongoose = require('mongoose');
const employeeScheme = new mongoose.Schema({
    khmer_name: {
        type: String,
        required: true
    },
    latin_name: {
        type: String,
        require: true,
    },
    dob: {
        type: Date,
        require: false
    },
    sex: String,
    nationality: String,
    religion: String,
    id_card: String,
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
module.exports = mongoose.model('Employees', employeeScheme);