const express = require('express');
const app  = express();
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

const port = 3003 || env.process.port

app.listen(port,()=>{
    console.log(`server open in ${port}`)
})