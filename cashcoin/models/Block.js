const GENESIS_DATA = require('./genesisBlock');
const { sha256 } = require('js-sha256');

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

    static hashBlock() {
        return sha256(
            this.nonce +
            this.timestamp + 
            JSON.stringify(this.data) +
            this.previousHash
        );
    }
}

module.exports = Block;