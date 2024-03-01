const mongoose = require('mongoose');

const AcademicYear = new mongoose.Schema({
    name: {type:String, maxLength:255},
    startDate: {
        type: Date,
        required: true
    },
    closureDate: {
        type: Date,
        required: true
    },
    finalClosureDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('AcademicYear', AcademicYear);