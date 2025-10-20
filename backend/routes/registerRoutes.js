const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const upload = require('../config/multer');

router.post('/', upload.single('foto'), registerController.register);

module.exports = router;
