const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');

router.get('/academic/create', adminController.createForm);
router.post('/academic/create', adminController.create);
router.get('/academic/view', adminController.view);
router.post('/academic/:id/delete', adminController.delete);

router.get('/academic/:id/edit', adminController.edit);

router.post('/academic/:id/update', adminController.update);

// router.get('/', newsController.index);

module.exports = router;
