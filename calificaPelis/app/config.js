var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var favicon = require("serve-favicon");

var logger = require("morgan");
var path = require("path");
var express = require("express");

module.exports = function(app) {
	// Dirección IP y puerto de escucha de peticiones
	app.set("port", process.env.PORT || 3434);
	app.set("ip", process.env.IP || "0.0.0.0");

	// Directorio con las plantillas
	app.set("views", "views");
	// Motor de visualización
	app.set("view engine", "jade");

	// Favicon
	app.use(favicon("./public/favicon/favicon.ico"));
	// Logger de solicitudes HTTP
	app.use(logger("dev"));

	// Parseadores
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(cookieParser());

	//Manejador de enrutado
	app.use(express.static("./public"));
};
