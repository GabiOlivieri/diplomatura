var pool = require('../bd');

async function getPublicaciones(){
    var query = "select * from publicaciones order by id desc";
    var rows = await pool.query(query);
    return rows;
}

module.exports = {getPublicaciones}