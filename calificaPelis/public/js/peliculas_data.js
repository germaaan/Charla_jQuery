$(document).ready(function() {
	$.getJSON("/peliculas/nombres", function(data) {
		data = $(data).sort(ordenarPeliculas);

		$.each(data, function(clave, valor) {
			$("#listado").append("<option>" + valor.nombre + "</option>");
		});

		cambiaInfoPelicula();
	});

	$("#listado").on("change", function() {
		cambiaInfoPelicula();
		$("#lista-comentarios").hide();
	});

	$("#parpadear").click(function() {
		$("#lista-comentarios").fadeOut("fast");
		$("#lista-comentarios").fadeIn("fast");
	});

	$("#ver").click(function() {
		$("#lista-comentarios").empty();
		$("#lista-comentarios").show();

		$.getJSON("/criticas/:" + $("#listado").val(), function(data) {
			data = $(data).sort(ordenarCriticas);

			$.each(data, function(clave, valor) {
				var critica = "<li class='list-group-item'>" +
					"<span class='badge'>" + valor.nota + " / 10</span>" +
					"<strong>Usuario: </strong>" + valor.usuario +
					"<strong>Fecha: </strong>" + valor.fecha +
					"<br/><strong>Comentario: </strong>" + valor.texto + "</li>";

				$("#lista-comentarios").append(critica);
			});
		});
	});

	function ordenarPeliculas(a, b) {
		return a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1;
	}

	function ordenarCriticas(a, b) {
		return a.fecha > b.fecha ? 1 : -1;
	}

	function cambiaInfoPelicula() {
		$.getJSON("/peliculas/:" + $("#listado").val(), function(data) {
			$("#director").val(data[0].director);
			$("#anio").val(data[0].anio);
			$("#genero").val(data[0].genero);
		});

		$("#lista-comentarios").empty();
	}
});
