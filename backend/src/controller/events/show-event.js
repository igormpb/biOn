const Party = require('../../models/party');

module.exports = showEvent = async (req, res) => {
    const _id = req.params.id
    const party = await Party.findById({ _id })
    res.json(party)
}