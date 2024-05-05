const express = require('express');
const router = express.Routes();
const listBlocksController = require('../controllers/listBlocksController');

router.get('/', listBlocksController.listBlocks);

module.exports = router;