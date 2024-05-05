const cashCoin = require('../utilities/starter');

exports.addBlock = (req, res) => {
    const block = req.body.block;

    cashCoin.addBlock(block)

    res.status(201).json({ success: true, data: block });
};