const express = require('express');
var publicaciones_router = require('./routes/admin/publicaciones');
var loginRouter = require('./routes/admin/login')
const session = require('express-session');
const hbs = require('hbs');
const cors = require('cors');
const publicacionesModel = require("./models/Model");
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.config();

bodyParser = require('body-parser');

let port = process.env.PORT;
if(process.env.NODE_ENV === "test") port = 3000

const app = express();

app.use(cors({
    origin: 'https://react-dev.frba.utn.edu.ar'
}));

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

app.post('/contacto', async (req,res) => {
    const mail = {
        to: 'gabrielolivieri01@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas información a este correo:
        ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    })
})


app.use('/admin/login', loginRouter);
app.get('/publicaciones/ultimas', async function (req,res,next){
    var publicaciones = await publicacionesModel.getPublicaciones();
    const response = publicaciones.map(publicacion =>
        ({
            ...publicacion,
            fecha_subida: publicacion.fecha_subida.getDate() + '/' + publicacion.fecha_subida.getMonth() + '/' + publicacion.fecha_subida.getFullYear()
        })
    )
    res.json(response)
});




app.use('/publicaciones',secured, publicaciones_router);
