const Transaction = require('../models/Transaction');
const cashCoin = require('../utilities/starter');

exports.addTranscations = (req, res) => {
    const { from, to, amount } = req.body;

    const newTransaction = new Transaction(from, to, amount);

    cashCoin.addTransaction(newTransaction);

    cashCoin.addBlock();

    res.status(201).json({ message: 'Transaction added successfully', transaction: newTransaction});
};