class Mempool {
    constructor() {
        this.transactions = []; // Store transactions
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    getTransactionsForBlock() {
        const transactionsForBlock = this.transactions;
        this.transactions = [];
        return transactionsForBlock;
    }
}

module.exports = Mempool;