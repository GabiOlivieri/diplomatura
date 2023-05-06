var express = require('express');
var publicaciones_router = express.Router();
var publicacionesModel = require('../models/Model');

publicaciones_router.get('/', async function (req,res,next){
    var publicaciones = await publicacionesModel.getPublicaciones();
    res.render(
        'admin/publicaciones',{
        layout: 'admin/publicaciones',
        usuario: req.session.nombre,
        publicaciones
    })
})

module.exports = publicaciones_router;