const Party = require('../../models/party');

module.exports = createEvent = async (req, res) => {
    const { name, state, city, photo,hours, dayInit,dayEnd, mouth, information } = req.body;

    const party = await Party.create({
        name, state, city, photo, hours, dayInit, dayEnd, mouth, information
    });

    return res.json(party)

}