const Party = require('../../models/party');

module.exports = createEvent = async (req, res) => {
    const { name, state, city, photo,hours, dayInit,dayEnd, month, information } = req.body;

    try{
        const party = await Party.create({
            name, state, city, photo, hours, dayInit, dayEnd, month, information
        });
        return res.json(party)
    }catch(err){
        return res.send(err)
    }
    

    
    

}