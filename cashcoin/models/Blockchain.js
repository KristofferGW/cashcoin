const Block = require("./Block");
const crypto = require('crypto');
const Mempool = require('./Mempool'); // Assuming Mempool is in a separate file

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
        this.mempool = new Mempool(); // Initialize the mempool
    }

    validateBlock(i) {
        if (i < 0 || i >= this.chain.length) {
            return false;
        } else if (i === 0) {
            return true;
        } else if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
            return false;
        }

        return true;
    }

    getLastBlock() {
        return this.chain.at(-1);
    }

    addBlock() {
        const transactions = this.mempool.getTransactionsForBlock();
        const previousBlock = this.getLastBlock();
        const timestamp = Date.now();
        const nonce = crypto.randomUUID();
        const hash = Block.hashBlock(nonce, timestamp, transactions, previousBlock.hash);

        const newBlock = new Block(nonce, timestamp, transactions, previousBlock.hash, hash);
        this.chain.push(newBlock);
    }

    addTransaction(transaction) {
        this.mempool.addTransaction(transaction);
    }
}

module.exports = Blockchain;
