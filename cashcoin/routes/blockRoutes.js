const express = require('express');
const router = express.Router();
const blockController = require('./controllers/blockController.js');

router.get('/blocks', blockController.listBlocks);
router.post('/blocks', blockController.addBlock);
router.get('/validate', blockController.validateBlockchain);