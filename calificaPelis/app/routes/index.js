// Pagina de inicio
exports.index = function(req, res) {
	res.render("index", {
		titulo: "CalificaPelis: Inicio"
	});
};