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
}
