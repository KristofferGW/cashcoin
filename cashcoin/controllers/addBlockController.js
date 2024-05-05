const cashCoin = require('../utilities/starter');

exports.addBlock = (req, res) => {
    const block = req.body.block;

    cashCoin.chain.push(block);

    res.status(201).json({ success: true, data: block });
};