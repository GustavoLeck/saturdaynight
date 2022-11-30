module.exports = function (application) {

    application.get(`/usuario`, function (req, res) {
        application.app.controllers.CUsuario.CUsuario(application, req, res);
    })
}