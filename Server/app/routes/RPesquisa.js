module.exports = function (application) {
    application.post(`/pesquisa`, (req, res) => {
      application.app.controllers.CPesquisa.postPesquisa(application, req, res);
    })
    application.get(`/lastpesquisa`, (req, res) => {
      application.app.controllers.CPesquisa.getLastPesquisa(application, req, res);
    })
}