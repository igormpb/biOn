const Party = require('../../models/party');

module.exports = deleteEvent = async (req, res) => {
    const _id = req.params.id
    await Party.remove({ _id })
    res.json({success: "delete"})
}