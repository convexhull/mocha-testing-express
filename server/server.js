const express = require('express');

var app = express();

app.get('/', (req,res) =>{
    res.status(201).send({
        "song" : 'gangnam',
        "error" : 'noooo'
    });
});

app.listen(3000);

app.get('/users' , (req,res) => {
    res.send([{"name" : "yash", "age" : 21}, {"name" : "zeeshan", "age" : 22}]);
})

module.exports = {
    app
}