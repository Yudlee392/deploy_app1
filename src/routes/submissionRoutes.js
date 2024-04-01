const express = require('express');
const router = express.Router();

const submissionController = require('../app/controllers/submissionController'); 

router.get('/submission', submissionController.getSubmissionForm);

router.post('/submission', submissionController.submitFormData);

module.exports = router;
