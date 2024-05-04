const GENESIS_DATA = require("./genesisBlcok");

class Block {
    constructor(nonce, timestamp, data, previousHash = '') {
        this.nonce = nonce;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }
}

module.exports = Block;