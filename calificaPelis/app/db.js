// Conexión a la base de datos
exports.connectionString = "postgres://calificador:calificador@localhost/calificaciones";

// Manejador de errores
exports.error = function(err, res, mensaje) {
	console.log(err);
	res.status(500);
	res.render("error", {
		mensaje: mensaje
	});
};
