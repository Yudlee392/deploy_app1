const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/StudentController');

const { upload, bucket, admin, getCachedViewLink } = require('../config/firebase');

router.get('/submission/create', studentController.getSubmissionForm);

router.post('/submission/create',
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }]),
    studentController.submitFormData);

router.get('/submission/view', studentController.getAllSubmissions)
router.get('/submission/:id/edit', studentController.editSubmissionForm)

router.post('/submission/:id/edit',
    upload.fields([{ name: 'image', maxCount: 1 }, { name: 'document', maxCount: 1 }]),
    studentController.editSubmission)
module.exports = router;