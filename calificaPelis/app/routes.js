var index = require("./routes/index");
var peliculas = require("./routes/peliculas");
var criticas = require("./routes/criticas");

module.exports = function(app) {
	// Rutas de acceso
	app.get("/", index.index);
	app.get("/peliculas/consultar", peliculas.peliculasDataForm);
	app.get("/peliculas/nuevas", peliculas.peliculasInsertForm);
	app.get("/peliculas/editar", peliculas.peliculasUpdateForm);
	app.get("/peliculas/eliminar", peliculas.peliculasDeleteForm);
	app.post("/peliculas/nuevas", peliculas.peliculasInsert);
	app.post("/peliculas/editar", peliculas.peliculasUpdate);
	app.post("/peliculas/eliminar", peliculas.peliculasDelete);
	app.get("/peliculas/nombres", peliculas.peliculasNombres);
	app.get("/peliculas/:nombre", peliculas.peliculasData);
	app.get("/criticas/nuevas", criticas.criticasInsertForm);
	app.post("/criticas/nuevas", criticas.criticasInsert);
	app.get("/criticas/:pelicula", criticas.criticasData);

	// Captura errores
	app.use(function(req, res, next) {
		var err = new Error("Error: página no encontrada.");
		err.status = 404;
		next(err);
	});

	// Manejador de errores:
	app.use(function(err, req, res, next) {
		res.status(err.status);
		res.render("error", {
			mensaje: err.message,
		});
	});
};