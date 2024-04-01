const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    word: {
        type: String,
        required: true
    }
});


const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
