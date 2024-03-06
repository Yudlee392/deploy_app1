const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/', userController.loginpage);
router.post('/', userController.login);


module.exports = router;
