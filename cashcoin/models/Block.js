const GENESIS_DATA = require('./genesisBlock');
const { sha256 } = require('js-sha256');

class Block {
    constructor(nonce, timestamp, data, previousHash, hash) {
        this.nonce = nonce;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }

    static genesis() {
        // Create a new block using the GENESIS_DATA with parameters correctly passed
        return new this(
            GENESIS_DATA.nonce,
            GENESIS_DATA.timestamp,
            GENESIS_DATA.data,
            GENESIS_DATA.lastHash,
            GENESIS_DATA.hash
        );
    }

    static hashBlock(nonce, timestamp, data, previousHash) {
        // Ensure all parts are converted to strings to avoid type errors
        const inputString = String(nonce) +
                            String(timestamp) +
                            JSON.stringify(data) +
                            String(previousHash);
    
        return sha256(inputString);
    }
    
}

module.exports = Block;