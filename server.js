const express = require('express');
const server = express();



server.all('/', (req, res)=>{
    res.send(`axix stats : \nonline`)
})
function keepAlive(){
  
}
module.exports = keepAlive;