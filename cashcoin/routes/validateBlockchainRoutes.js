const express = require('express');
const router = express.Router();
const validateBlockchainController = require('../controllers/validateBlockchainController');

router.get('/', validateBlockchainController.validateBlockchain);

module.exports = router;
