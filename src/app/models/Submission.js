const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    student: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    magazine: { type: mongoose.Schema.ObjectId, ref: 'Magazine', required: true },
    dateSubmitted: {
        type: Date,
        default: function() {
            // Get current date in UTC
            const currentDate = new Date();
            // Set time to midnight (00:00:00)
            currentDate.setUTCHours(0, 0, 0, 0);
            return currentDate;
        }
    },
    status: {
        type: String,
        enum: ['Submitted', 'Rejected', 'Approved'],
        default: 'Submitted'
    },
    imagePath: { type: String },
    documentPath: { type: String },
    comment: { type: String, default: '' }
});

module.exports = mongoose.model('Submission', submissionSchema);
