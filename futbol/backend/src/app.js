const express = require('express');
var publicaciones_router = require('./routes/admin/publicaciones');
var loginRouter = require('./routes/admin/login')
const session = require('express-session');
const hbs = require('hbs');

bodyParser = require('body-parser');

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

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(session({
    secret: 'ciclon2023',
    resave: false,
    saveUninitialized: true
}));

// Middleware
const secured = async (req, res, next) => {
    try{
        console.log(req.session.id_usuario);
        if(req.session.id_usuario){
            next();
        } else {
            res.redirect('/admin/login');
        }
    }catch (error){
        console.log(error);
    }
};

app.post('/ingresar', bodyParser, function (req,res){
    if (req.body.nombre){
        req.session.nombre = req.body.nombre;
    }
    res.redirect('/');
});
app.use('/admin/login', loginRouter);

app.get('/salir', function (req,res){
    req.session.destroy();
    res.redirect('/');
})


app.use('/publicaciones',secured, publicaciones_router);
