function MPesquisa(connection){
    this._connection = connection
}

MPesquisa.prototype.postPesquisa = function(req, callback){
    console.log(req.body)
    this._connection.query(`INSERT INTO PESQUISA (usuario, titulo, genero, imdb,datalanc) VALUES (1, "${req.body.titulo}", "${req.body.genero}",  "${req.body.imdb}","${req.body.datalanc}")`, callback)
}

MPesquisa.prototype.getLastPesquisa = function(req, callback){
    this._connection.query(`SELECT * FROM PESQUISA ORDER BY ID DESC LIMIT 4`, callback)
}

module.exports = function(){ 
    return MPesquisa;
}
