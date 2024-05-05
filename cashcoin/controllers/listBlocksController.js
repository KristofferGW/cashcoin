const cashCoin = require('../utilities/starter');

exports.listBlocks = (req, res) => {
    const chain = cashCoin.chain;

    res.status(201).json({ success: true, data: chain });
};