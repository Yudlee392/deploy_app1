const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.post('/search', siteController.searchpost);

router.get('/', siteController.index);

module.exports = router;
