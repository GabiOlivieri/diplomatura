var express = require('express');
var publicaciones_router = express.Router();
var publicacionesModel = require('../../models/Model');
const {getPublicaciones} = require("../../models/Model");

publicaciones_router.get('/', async function (req,res,next){
    var publicaciones = await publicacionesModel.getPublicaciones();
    res.render(
        'admin/publicaciones',{
            layout: 'admin/layout',
            usuario: req.session.nombre,
            publicaciones
        })
})

publicaciones_router.get('/ultimas', async function (req,res,next){
    var publicaciones = await publicacionesModel.getPublicaciones();
    res.json(publicaciones)
})

publicaciones_router.get('/agregar', (req,res,next) => {
    res.render('admin/agregar',{
        layout: 'admin/layout'
    });
});

publicaciones_router.put('/modificar/:id', async (req,res,next) => {
    try{
        await publicacionesModel.modificarPublicacion(req.params.id,req.body);
        res.redirect('/publicaciones')
    }catch (error){
        console.log(error)
    }
});

publicaciones_router.get('/modificar/:id', async (req,res,next) => {
    var publicacion = await publicacionesModel.getPublicacion(req.params.id)
    res.render('admin/modificar',{
        layout: 'admin/layout',
        publicacion
    });
});

publicaciones_router.post('/agregar', async (req,res,next) => {
    try{
        if(req.body.titulo !== "" && req.body.descripcion !== ""){
            let date_ob = new Date();

// current date
// adjust 0 before single digit date
            let date = ("0" + date_ob.getDate()).slice(-2);

// current month
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
            let year = date_ob.getFullYear();

// current hours
            let hours = date_ob.getHours();

// current minutes
            let minutes = date_ob.getMinutes();

// current seconds
            let seconds = date_ob.getSeconds();

            var obj = ({
                titulo: req.body.titulo,
                descripcion: req.body.descripcion,
                iframe: req.body.iframe,
                fecha_subida: year + "-" + month + "-" + date
            })

            await publicacionesModel.insertarPublicacion(obj);
            res.redirect('/publicaciones')
        }else{
            res.render('admin/agregar',{
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    }catch (error){
        console.log(error)
        res.render('admin/agregar',{
            layout: 'admin/layout',
            error: true, message: 'No se cargó la publicación'
        })
    }

});

publicaciones_router.delete('/eliminar/:id', async (req,res,next) => {
    try{
            await publicacionesModel.eliminarPublicacion(req.params.id);
            // res.redirect('/publicaciones')
    }catch (error){
        console.log(error)
    }
});


module.exports = publicaciones_router;