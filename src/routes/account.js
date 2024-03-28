const express = require('express');
const accountController = require('../app/controllers/AccountController');
const accountRouter = express.Router();

accountRouter.get('/account/create', accountController.createAccountForm);
accountRouter.post('/account/create', accountController.createAccount);
accountRouter.get('/account/view', accountController.viewUsers);
accountRouter.post('/account/:id/delete', accountController.deleteAccount);


accountRouter.get('/account/:id/edit', accountController.editAccount);
accountRouter.post('/account/:id/update', accountController.updateAccount);

module.exports = accountRouter;