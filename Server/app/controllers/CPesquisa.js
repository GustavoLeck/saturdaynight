
module.exports.getLastPesquisa= function(application, req, res){  
   
   const mysqlConnection = application.config.dbConnection();
   const pesquisaModel = new application.app.models.MPesquisa(mysqlConnection);

   pesquisaModel.getLastPesquisa(req, function(error, result){
      res.json(result)
  })
}


module.exports.postPesquisa = function(application, req, res){

   const mysqlConnection = application.config.dbConnection();
   const pesquisaModel = new application.app.models.MPesquisa(mysqlConnection);
   

   pesquisaModel.postPesquisa(req, function(error, result) {

      if(error === null){
         res.json({"status": 200})
      }else{
         const map = new Map();
         map.set('errno', error.errno);
         map.set('code', error.code);
         console.log(typeof map)
         res.json()
         
      }

   })
}