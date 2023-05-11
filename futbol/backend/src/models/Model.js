var pool = require('../bd');

async function getPublicaciones(){
    var query = "select * from publicaciones order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function getPublicacion(id){
    var query = "select * from publicaciones where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarPublicacion(id,obj){
    var query = "UPDATE publicaciones SET ? where id = ?";
    var rows = await pool.query(query, [obj,id]);
    return rows[0];
}

async function eliminarPublicacion(id){
    var query = "DELETE from publicaciones where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function insertarPublicacion(obj){
    try{
        var query = "insert into publicaciones set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {getPublicaciones, insertarPublicacion,eliminarPublicacion, modificarPublicacion, getPublicacion}