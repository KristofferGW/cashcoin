const cashCoin = require('../utilities/starter');

exports.validateBlockchain = (req, res) => {
    chain = cashCoin.chain;
    let isValid = true;
    for (let i = 0; i < chain.length - 1; i++) {
        if (!cashCoin.validateBlock(i)) {
            isValid = false
            res.status(404).json({message: 'Block not valid', index: i, block: cashCoin.chain[i] });
            return;
        }
    }

    if (isValid) {
        res.status(201).json({ message: 'Chain valid', chain: cashCoin.chain });
    }
};