const express = require('express');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', loginController.getUser);
loginRouter.get('/:id', loginController.getUserById);

module.exports = loginRouter;