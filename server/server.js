config = require('../config')
express = require('express')
app = express()
path = require('path')
var port = config.PORT || 5000;
console.log(port)
app.listen(port, function(msg){
    console.log('server running at '+ port +" message "+ msg)
})

app.use(express.static('client'))

app.get('/', function(req,res){
    console.log(req);
    res.sendFile(path.join(__dirname, '..', 'client','index.html'))
})