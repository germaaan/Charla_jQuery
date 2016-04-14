$(document).ready(function() {
	$.getJSON("/peliculas/nombres", function(data) {
		data = $(data).sort(ordenarPeliculas);

		$.each(data, function(clave, valor) {
			$("#nombre").append("<option>" + valor.nombre + "</option>");
		});

		establecerDatosPelicula();
	});

	$("#nombre").on("change", function() {
		establecerDatosPelicula();
	});

	$("#restablecer").click(function() {
		establecerDatosPelicula();
	});

	function ordenarPeliculas(a, b) {
		return a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1;
	}

	function establecerDatosPelicula() {
		$.getJSON("/peliculas/:" + $("#nombre").val(), function(data) {
			$("#director").val(data[0].director.trim());
			$("#anio").val(data[0].anio);
			$("#genero").val(data[0].genero.trim());
		});
	}
});