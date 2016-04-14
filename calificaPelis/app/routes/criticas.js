var pg = require("pg");
var db = require("../db");

// Sección "Añadir críticas"
exports.criticasInsertForm = function(req, res) {
	res.render("criticas_insert_form", {
		titulo: "CalificaPelis: Añadir crítica"
	});
};

// Inserta crítica en base de datos
exports.criticasInsert = function(req, res) {
	pg.connect(db.connectionString, function(err, client, done) {
		if (err) {
			done();
			db.error(err, res, "Error: no se ha podido conectar a la base de datos.");
		}

		client.query("INSERT INTO criticas (pelicula, usuario, texto, nota) VALUES ((SELECT id FROM peliculas WHERE nombre = $1), $2, $3, $4)", [req.body.pelicula, req.body.usuario, req.body.texto, req.body.nota], function(err, result) {
			if (err) {
				done();
				error(err, res, "No se ha podido añadir la crítica introducida. Compruebe los datos introducidos.");
			} else {
				done();

				res.render("criticas_data", {
					titulo: "CalificaPelis: Añadir/eliminar crítica",
					datos: {
						"pelicula": req.body.pelicula,
						"usuario": req.body.usuario,
						"texto": req.body.texto,
						"nota": req.body.nota
					}
				});
			}
		});
	});
};

// Devuelve las críticas de una película en formato JSON
exports.criticasData = function(req, res) {
	var pelicula = req.params.pelicula.substr(1, req.params.pelicula.length);
	var results = [];

	pg.connect(db.connectionString, function(err, client, done) {
		if (err) {
			done();

			res.setHeader("Content-Type", "application/json");
			res.send({
				"nombre": "ERROR",
				"usuario": "ERROR",
				"fecha": "ERROR",
				"texto": "ERROR",
				"nota": -1
			});
		}

		var query = client.query("SELECT peliculas.nombre, criticas.usuario, criticas.fecha, criticas.texto, criticas.nota FROM peliculas INNER JOIN criticas ON peliculas.id=criticas.pelicula WHERE peliculas.nombre=$1", [pelicula]);

		query.on("row", function(row) {
			results.push(row);
		});

		query.on("end", function() {
			done();

			res.setHeader("Content-Type", "application/json");
			res.send(results);
		});
	});
};