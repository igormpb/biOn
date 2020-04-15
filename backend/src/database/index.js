const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true , useUnifiedTopology: true }).then(()=>{
    console.log("bd success")
}).catch((err)=>{
    console.log(err)
});

module.exports = mongoose;