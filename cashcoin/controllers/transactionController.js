const Transaction = require('./models/transaction.js');

exports.addTranscations = (req, res) => {
    const { from, to, amount } = req.body;

    const newTransaction = new Transaction(from, to, amount);

    res.status(201).json({ message: 'Transaction added successfully', transaction: newTransaction});
}