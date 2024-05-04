const Block = require("./Block");

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    getLastBlock() {
        return this.chain.at(-1);
    }
}