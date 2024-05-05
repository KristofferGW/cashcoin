const express = require('express');
const router = express.Router();
const addBlockController = require('../controllers/addBlockController');

router.post('/', addBlockController.addBlock);

module.exports = router;