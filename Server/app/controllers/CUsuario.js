module.exports.CUsuario= function(application, req, res){
    var mysqlConnection = application.config.dbConnection();
    var musicaModel = new application.app.models.MUsuario(mysqlConnection);
    
    musicaModel.getUsuario(function(error, result){
       res.json(result);
    })
}