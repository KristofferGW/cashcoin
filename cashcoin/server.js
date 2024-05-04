const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listBlocksController = require('./controllers/listBlocksController');
const addBlockController = require('./controllers/addBlockController');
const transactionController = require('./controllers/transactionController');
const validateBlockchainController = require('./controllers/validateBlockchainController');
const Blockchain = require('./models/Blockchain');

const cashCoin = new Blockchain();

app.use(bodyParser.json());

app.get('/listBlocks', listBlocksController.listBlocks);
app.get('/validate', validateBlockchainController.validateBlockchain);
app.post('/addBlock', addBlockController.addBlock);
app.post('/transaction', transactionController.addTranscations);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});