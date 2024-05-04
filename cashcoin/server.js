const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const listBlocksRoutes = require('./routes/listBlocksRoutes');
const addBlockRoutes = require('./routes/addBlockRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const validateBlockchainRoutes = require('./routes/validateBlockchainRoutes');

app.use(bodyParser.json());

app.use('/listBlocks', listBlocksRoutes);
app.use('/validate', validateBlockchainRoutes);
app.use('/addBlock', addBlockRoutes);
app.use('/transaction', transactionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});