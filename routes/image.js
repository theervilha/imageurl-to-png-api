const express = require('express');
const router = express.Router();
const imageController = require('../controllers/image.controller');

router.get('/convert-to-png', imageController.convertToPNG);

module.exports = router;