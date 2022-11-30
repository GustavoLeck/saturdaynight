function MUsuario(connection){
    this._connection = connection
}

MUsuario.prototype.getUsuario = function(callback){
    this._connection.query('SELECT * FROM USUARIO', callback)
}

module.exports = function(){ 
    return MUsuario;
}