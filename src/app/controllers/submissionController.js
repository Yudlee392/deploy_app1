const Submission = require('../models/submissionModel');

exports.getSubmissionForm = (req, res) => {
    res.render('submission');
};

exports.submitFormData = async (req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const image = req.body.image;
        const word = req.body.word;

        const newSubmission = new Submission({
            name: name,
            description: description,
            image: image,
            word: word
        });

        await newSubmission.save();

        res.redirect('/submission?success=true');
    } catch (error) {
        console.error('Error submitting form:', error);
        res.redirect('/submission?error=true');
    }
};
