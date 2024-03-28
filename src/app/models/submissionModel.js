const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    submissionStatus: {
        type: String,
        required: false
    },
    dueDate: {
        type: String,
        required: false
    },
    timeRemaining: {
        type: String,
        required: false
    },
    lastModified: {
        type: String,
        required: false
    },
    fileSubmission: {
        type: String,
        required: false
    },
    submissionComments: {
        type: String,
        required: false
    }
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
