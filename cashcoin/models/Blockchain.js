const Block = require("./Block");
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
        const nonce = 0;

        const hash = Block.hashBlock(nonce, timestamp, data, previousBlock.hash);

        const newBlock = new Block(nonce, timestamp, data, previousBlock.hash);
        newBlock.hash = hash;

        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;