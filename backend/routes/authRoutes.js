const express = require('express');
const router = express.Router();

const registerRoutes = require('./registerRoutes');
const loginRoutes = require('./loginRoutes');
const userController = require('../controllers/userController'); 


router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.get('/user/:id', userController.getUserById);

module.exports = router;
