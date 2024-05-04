const Block = require("./Block");

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }
}