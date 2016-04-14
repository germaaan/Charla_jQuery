$(document).ready(function() {
	$.getJSON("/peliculas/nombres", function(data) {
		data = $(data).sort(ordenarPeliculas);

		$.each(data, function(clave, valor) {
			$("#pelicula").append("<option>" + valor.nombre + "</option>");
		});
	});

	$("#flip").click(function(){
		$("#panel").slideDown("slow");
	});

	function ordenarPeliculas(a, b) {
		return a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1;
	}
});
