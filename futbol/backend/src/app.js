const express = require('express');
var nosotrosRouter = require('./routes/nosotros');
var publicaciones_router = require('./routes/admin/publicaciones');
const session = require('express-session');
const hbs = require('hbs');


bodyParser = require('body-parser').json();

let port = process.env.PORT;
if(process.env.NODE_ENV === "test") port = 3000

const app = express();

app.set('view engine', 'hbs');

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

// Middleware
const myMiddleware = (req, res, next) => {
    console.log('Se ha llamado al middleware');
    next();
};

app.post('/ingresar', bodyParser, function (req,res){
    if (req.body.nombre){
        req.session.nombre = req.body.nombre;
    }
    res.redirect('/');
});

app.use('/', myMiddleware);

app.get('/salir', function (req,res){
    req.session.destroy();
    res.redirect('/');
})


app.use('/nosotros', nosotrosRouter);
app.use('/publicaciones', publicaciones_router);
