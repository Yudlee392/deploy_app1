const express = require('express');
const router = express.Router();
const managerController = require('../app/controllers/ManagerController');

router.get('/magazine/create', managerController.createMagazineForm);
router.post('/magazine/create', managerController.createMagazine);
router.get('/magazine/view', managerController.viewMagazines);


module.exports = router;
