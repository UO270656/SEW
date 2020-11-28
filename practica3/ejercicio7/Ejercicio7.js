class Imagen {
    constructor () {   
		this.modo=1;
    }
    mostrar(){
		if(this.modo==1){
			$("#imagenIndex").hide();
			this.modo=0;
		}else{
			$("#imagenIndex").show();
			this.modo=1;
		}
    }
}
class Documento{
	constructor(){
		this.imagen=new Imagen();
		this.modoProta=true;
		this.modoTabla=true;
	}
	mostrarImagen(){
		this.imagen.mostrar();
	}
	modificarProtagonista(){
		if(this.modoProta){
			$("#tituloProta").html("Rutger Hauer")
			$("#subtituloProta").html("Premios")
			$("#listaProta").html("<li>Globo de Oro 1987</li>"+
			"<li>Trayectoria en el International Short Film Festival de Montecatini</li>"+
			"<li>Golden Calf</li>"+
			"<li>Rembrandt Award</li>");
			this.modoProta=false;
		}else{
			$("#tituloProta").html("Harrison Ford")
			$("#subtituloProta").html("Otras peliculas")
			$("#listaProta").html("<li>Indiana Jones</li>"+
				"<li>Unico Testigo</li>"+
				"<li>El fugitivo</li>"+
				"<li>Star Wars</li>");
			this.modoProta=true;
		}
	}
	creameLaTabla(){
		if(this.modoTabla){
		var tabla = $("<div id='divisorTabla'></div>").append("<table>"+
			"<thead>"+
				"<tr>"+
					"<th>Año</th>"+
					"<th>Título</th>"+
					"<th>Género</th>"+
					"<th>Desarrollador(es)</th>"+
					"<th>Plataforma(s)</th>"+
					"</tr>"+
			"</thead>"+
			"<tbody>"+
				"<tr>"+
					"<td>1985</td>"+
					"<td>Blade Runner</td>"+
					"<td>Shoot 'em up</td>"+
					"<td>Andy Stodart, Ian Foster e Ian Ellery</td>"+
					"<td>Commodore 64, ZX Spectrum y Amstrad CPC198​</td>"+
				"</tr>"+
				"<tr>"+
					"<td>1997</td>"+
					"<td>Blade Runner</td>"+
					"<td>Aventura gráfica</td>"+
					"<td>Westwood Studios</td>"+
					"<td>Microsoft Windows199</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2017</td>"+
					"<td>Blade Runner 9732 (no oficial)</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Quentin Lengele</td>"+
					"<td>HTC Vive</td>"+
				"</tr>"+
				"<tr>"+
					"<td>2018</td>"+
					"<td>Blade Runner: Revelations</td>"+
					"<td>Realidad virtual</td>"+
					"<td>Seismic Games y Alcon Media Group</td>"+
					"<td>Google Daydream</td>"+
				"</tr>"+
			"</tbody>"+
			"</table>");  // Crea un elemento con jQuery
        $("#tablaH2").after(tabla);
		this.modoTabla=false;
		}else{
			$("#divisorTabla").remove();
			this.modoTabla=true;
		}
	}
	padres(){
		$("*", document.body).each(function() {
			var etiquetaPadre = $(this).parent().get(0).tagName;
			$(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
		});
	}
	coountTabla(){
		var countFilas=0;
		var countColumnas=0;
		$("table tr").each(function() {
            countFilas=countFilas+1;
		});
		$("thead tr th").each(function() {
            countColumnas=countColumnas+1;
        });
		alert( "En la tabla hay: " + countFilas+" filas y "+countColumnas+" columnas");
	}
}
var documento= new Documento();