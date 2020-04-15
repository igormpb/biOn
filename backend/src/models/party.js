const mongoose = require('../database/index');
const Schema = mongoose.Schema;

const partySchema = new Schema({
    name:{
        type:String,
        required: true
    },

    state:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required: true
    },

    photo:{
        type: String,
        required: true
    },
    hours:{
        type: String,
        required: true
    },

    dayInit:{
        type:String,
        required: true
    },

    dayEnd:{
        type:String,
        required: true
    },

    mouth:{
        type:String,
        required: true
    },

    information:{
        type:String,
        required: true  
    }
})

const Party = mongoose.model('party', partySchema);
module.exports = Party;