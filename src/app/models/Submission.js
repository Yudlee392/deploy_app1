const mongoose = require('mongoose');
const submissionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    student: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    magazine: { type: mongoose.Schema.ObjectId, ref: 'Magazine', required: true },
    dateSubmitted: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ['Submitted', 'Rejected', 'Approved'],
        default: 'Submitted'
    },
    imagePath:{type:String},
    documentPath:{type:String}

});

const Submission = mongoose.model('Submission', submissionSchema);
module.exports = Submission;
