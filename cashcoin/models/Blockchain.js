const Block = require("./Block");
const crypto = require('crypto');
class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    validateBlock(i) {
        if (i < 0 || i >= this.chain.length) {
            return false;
        } else if (i === 0) {
            return true
        } else if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
            return false;
        }

        return true;
    }

    getLastBlock() {
        return this.chain.at(-1);
    }

    addBlock(data) {
        const previousBlock = this.getLastBlock()
        const timestamp = Date.now();
        const nonce = crypto.randomUUID();

        const hash = Block.hashBlock(nonce, timestamp, data, previousBlock.hash);

        const newBlock = new Block(nonce, timestamp, data, previousBlock.hash);
        newBlock.hash = hash;

        this.chain.push(newBlock);
    }

    addTransaction(transaction) {
        this.addBlock(transaction);
    }
}

module.exports = Blockchain;