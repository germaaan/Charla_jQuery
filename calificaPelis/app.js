var express = require("express");
var app = express();

var config = require("./app/config");
var routes = require("./app/routes");

config(app);
routes(app);

server = app.listen(app.get("port"), app.get("ip"), function() {
	console.log("Express server listening on " + app.get("ip") + ":" + app.get("port"));
});

module.exports = server;