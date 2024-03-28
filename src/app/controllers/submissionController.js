const Submission = require('../models/submissionModel');

exports.getSubmissionForm = (req, res) => {
    res.render('submission');
};

exports.submitFormData = async (req, res) => {
    try {
        const submissionData = req.body;

        const newSubmission = new Submission(submissionData);

        await newSubmission.save();

        res.redirect('/submission');
    } catch (error) {
        console.error('Error submitting form:', error);
        res.redirect('/submission');
    }
};
