const Party = require('../../models/party');

module.exports = listAll = async (req, res) => {
    const party = await Party.find();
    res.json(party)
}