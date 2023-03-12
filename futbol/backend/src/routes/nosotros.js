var express = require('express');
var router = express.Router();

router.get('/', function (req,res,next) {
    res.send('Nosotros page');
})

router.get('/saludar', function (req,res,next) {
    console.log("Nos saludaron!")
    next();
},function (req,res,next){
    res.send('Como estas?');
})

module.exports = router;