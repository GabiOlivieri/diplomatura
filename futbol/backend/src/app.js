const express = require('express');
var nosotrosRouter = require('./routes/nosotros');
const session = require('express-session');

bodyParser = require('body-parser').json();

let port = process.env.PORT;
if(process.env.NODE_ENV === "test") port = 3000

const app = express();

app.listen(port)

app.route('/messi').get(function (req,res){
    res.send('Hola Messi!');
}).post(function (req,res){
    res.send("Posteaste un messi");
});

app.use(session({
    secret: 'ciclon2023',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function (req,res){
    if (req.session.nombre){
        res.send('Hola ' + req.session.nombre);
    }else{
        res.send('Hola usuario desconocido.');
    }
});

app.post('/ingresar', bodyParser, function (req,res){
    if (req.body.nombre){
        req.session.nombre = req.body.nombre;
    }
    res.redirect('/');
});

app.get('/salir', function (req,res){
    req.session.destroy();
    res.redirect('/');
})


app.use('/nosotros', nosotrosRouter);
