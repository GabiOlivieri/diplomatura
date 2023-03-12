const express = require('express');
var nosotrosRouter = require('./routes/nosotros');

let port = process.env.PORT;
if(process.env.NODE_ENV === "test") port = 3000

const app = express();

app.listen(port)

app.get('/', function (req,res){
    res.send('Hola mundo!');
});

app.route('/messi').get(function (req,res){
    res.send('Hola Messi!');
}).post(function (req,res){
    res.send("Posteaste un messi");
});

app.use('/nosotros', nosotrosRouter);
